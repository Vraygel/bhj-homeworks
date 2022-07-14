const menu__link = document.querySelectorAll('.menu__link')


for (let temp of menu__link){
    
    temp.onclick = () => {

    let qwerty = temp.closest('.menu__item')
    
    if(qwerty.querySelectorAll('ul').length > 0){
        let classAdd = qwerty.querySelectorAll('ul')
        classAdd[0].classList.toggle('menu_active')
        return false
        }
     
    
    }

}

