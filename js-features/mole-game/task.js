let holes = document.querySelectorAll('.hole')
let dead = document.getElementById('dead')
let lost = document.getElementById('lost')



    for (const hole of holes){
hole.onclick = function temp() {
        hole.classList.contains('hole_has-mole') ?
        dead.textContent = Number(dead.textContent) + 1 :
        lost.textContent = Number(lost.textContent) + 1

        lost.textContent == 5 ? +function name() {
            alert('Вы проиграли')
            lost.textContent = 0
            dead.textContent = 0
        }() : lost.textContent

        dead.textContent == 10 ? 
        +function name() {
            alert('Вы выиграли')
            lost.textContent = 0
            dead.textContent = 0
        }() : dead.textContent
        
    
}
       
}



