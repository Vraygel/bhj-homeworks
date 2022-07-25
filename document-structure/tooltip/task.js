const hasTooltip = document.querySelectorAll('.has-tooltip')
let tooltipActive = document.getElementsByClassName('tooltip_active')

for (const iterator of hasTooltip) {
    iterator.addEventListener('click', funcClickHasTooltip)    
}

function funcClickHasTooltip(event) {
        let leftSearch = event.target.getBoundingClientRect().left
        let topSearch = event.target.getBoundingClientRect().top + 17

        if(tooltipActive[0]){  
            if(tooltipActive[0].textContent == event.target.getAttribute('title')){
                tooltipActive[0].remove()
            } else{
                tooltipActive[0].remove()
                event.target.insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active" style="left: ${leftSearch}px; top: ${topSearch}px ">${event.target.title}</div>`)
                }
            } else{
            event.target.insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active" style="left: ${leftSearch}px; top: ${topSearch}px ">${event.target.title}</div>`)   
        } 
        event.preventDefault()
}
