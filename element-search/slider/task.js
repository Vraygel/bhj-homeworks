const slider__arrow_prev = document.querySelector('.slider__arrow_prev')
const slider__arrow_next = document.querySelector('.slider__arrow_next')
const slider__item = document.querySelectorAll('.slider__item')
let number = slider__item.length





slider__arrow_prev.onclick = () => {
    
    for (let temp of slider__item){
        temp.classList.remove('slider__item_active')
    }
    

    number == 0 ? number =  slider__item.length : number
    --number 
    
    slider__item[number].classList.add('slider__item_active')
  
}

slider__arrow_next.onclick = () => {
    
    for (let temp of slider__item){
        temp.classList.remove('slider__item_active')
    }
    
    number == slider__item.length - 1 || number == slider__item.length   ? number = 0 : number
    number++

    console.log(number)

    slider__item[number].classList.add('slider__item_active')
  
}



