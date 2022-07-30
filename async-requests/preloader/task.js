const loader = document.querySelector('.loader');
const itemDiv = document.querySelector('.item');
let xhr = new XMLHttpRequest();

xhr.open('get', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        loader.classList.remove('loader_active');
        let value = JSON.parse(xhr.responseText);
        Object.entries(value.response.Valute).forEach((item) =>{
            itemDiv.insertAdjacentHTML('afterEnd', `<div class="item">
            <div class="item__code">
            ${Object.entries(item)[1][1].CharCode}
            </div>
            <div class="item__value">
            ${Object.entries(item)[1][1].Value}
            </div>
            <div class="item__currency">
            руб.
            </div>
            </div>`)
        })
    }
}