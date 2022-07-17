const  fonSizes = document.querySelectorAll('.font-size')
const book = document.querySelector('.book')
let log = console.log

//log(fonSizes)


for(let fontSize of fonSizes){
    //log(fontSize.classList)
    
    fontSize.addEventListener('click', fontSizeClick)   
}

function fontSizeClick(element) {

    for(let fontSize of fonSizes){
        fontSize.classList.remove('font-size_active')    
    }
    
    element.target.classList.add('font-size_active') 
    log(element.target.classList)

    if(element.target.classList.contains('font-size_small')){
        book.className = ('book font-size_small')
    }else{
        if(element.target.classList.contains('font-size_big')){
            book.className = ('book font-size_big')
        } else{
            book.className = ('book')
        }
    }
    element.preventDefault()   
}




