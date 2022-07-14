const dropdown__value = document.querySelector(".dropdown__value")
const dropdown__link = document.querySelectorAll('.dropdown__link')

dropdown__value.addEventListener('click', collback)

function collback() {
    document.querySelector('.dropdown__list').classList.add('dropdown__list_active')  
}

for (let temp of dropdown__link){
    temp.addEventListener('click', onClick)
}

function onClick(event) {
    dropdown__value.textContent = event.target.textContent
    event.preventDefault()
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')
    console.log(dropdown__value.textContent)  
}
