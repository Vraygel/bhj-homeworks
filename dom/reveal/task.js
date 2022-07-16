const reveal = document.querySelectorAll('.reveal')
const viewportHeight = window.innerHeight - 100

window.addEventListener('scroll', function(){

    reveal.forEach((item, index) => {

        if(item.getBoundingClientRect().top < viewportHeight){
        item.classList.add('reveal_active')
        }

        if(item.getBoundingClientRect().top > viewportHeight ||
        item.getBoundingClientRect().bottom < 100){
            item.classList.remove('reveal_active')
        }    
    })
})
