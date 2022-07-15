const tab_active = document.querySelectorAll('.tab_active')
const tab__content = document.querySelectorAll('.tab__content')
const tabLink = document.querySelectorAll('.tab')

for (let temp of tabLink){
    temp.addEventListener('click', onClick)
}

function onClick(event) {   
    for (let temp of tabLink){      
        temp.classList.remove('tab_active')
        event.target.classList.add('tab_active')
    }  
    tabContentActive()   
}

function tabContentActive() {
    for( let temp of tab__content){
        temp.classList.remove('tab__content_active')
    }

    tabLink.forEach((temp, index) => {
        if(temp.classList.contains('tab_active')){
            tab__content.item(index).classList.add('tab__content_active')
        }
    })
}


