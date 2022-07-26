const loader = document.querySelector('.loader')
const itemDiv = document.querySelector('.item')

let log = console.log
//log(loader)
 



let xhr = new XMLHttpRequest();
// экземпляр объекта XMLHttpRequest
//console.log(xhr);

xhr.open('get', 'https://netology-slow-rest.herokuapp.com')
xhr.send();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
    loader.classList.remove('loader_active')
    //console.log(xhr.responseText)
    
    let value = JSON.parse(xhr.responseText);
    //log(Object.entries(value.response.Valute)[0])
    Object.entries(value.response.Valute).forEach((item, index) =>{
        log(Object.entries(item)[1][1])
        itemDiv.insertAdjacentHTML('afterEnd', `<div class="item">
        <div class="item__code">
        ${Object.entries(item)[1][1].CharCode} (${Object.entries(item)[1][1].Name})
        </div>
        <div class="item__value">
        = ${Object.entries(item)[1][1].Value}
        </div>
        <div class="item__currency">
        руб.
        </div>
        </div>`)
    })

   

    }
}
    




item.insertAdjacentHTML('afterEnd', `<div class="item__code">
USD
</div>
<div class="item__value">
32
</div>
<div class="item__currency">
руб.
</div>`)