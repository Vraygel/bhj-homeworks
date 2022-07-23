
const hasTooltip = document.querySelectorAll('.has-tooltip')
let tooltipActive = document.getElementsByClassName('tooltip_active')

function defaultFalse() {
    for (const iterator of hasTooltip) {     
        return false
    }
}

for (const iterator of hasTooltip) {
    iterator.addEventListener('click', func)    
}

function func(event) {

        let leftSearch = event.target.getBoundingClientRect().left
        let topSearh = event.target.getBoundingClientRect().top + 17

        if(tooltipActive[0]){          
           tooltipActive[0].remove()
        } else{
            event.target.insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active" style="left: ${leftSearch}px; top: ${topSearh}px ">${event.target.title}</div>`)   
        }
        
        event.preventDefault()





