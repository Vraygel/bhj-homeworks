const rotator__case = document.querySelectorAll('.rotator__case')
const rotator = document.querySelector('.rotator')

setInterval(() => {
    +function temp() {
        for (const temp of rotator__case) { 
            if(temp.nextElementSibling){
                if (temp.classList.contains('rotator__case_active')) {
                    temp.classList.remove('rotator__case_active')
                    temp.nextElementSibling.classList.add('rotator__case_active')
                    return
                }
            }  else {
                rotator.firstElementChild.classList.add('rotator__case_active')
                rotator.lastElementChild.classList.remove('rotator__case_active')   
            }
        }
    }() 
}, 1000)