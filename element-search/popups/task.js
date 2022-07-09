let modal_main = document.getElementById('modal_main')
let modal_success = document.getElementById('modal_success')
let modal__close = document.getElementsByClassName('modal__close');
let show__success = document.getElementsByClassName('show-success')

modal_main.classList.add('modal_active')


console.log(show__success)

for(let item of modal__close){
    item.onclick = () => {
    modal_main.className = 'modal'
    modal_success.className = 'modal'
    }
}

for(let item of show__success){
    item.onclick = () => {
        modal_success.classList.add('modal_active')
    }
}

