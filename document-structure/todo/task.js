const taskRemove = document.getElementsByClassName('task__remove')
const button = document.querySelector('button')
const tasksList = document.querySelector('tasks__list')
const input = document.querySelector('input')
const task = document.getElementsByClassName('task')
let log = console.log

input.oninput 
input.addEventListener('keypress', enterMessage);

function enterMessage(event) {
      if(event.key == 'Enter'){
        return input.value
    }
}

button.onclick = (() => {
    if(input.value == ''){
        alert('Сообщение не может быть пустое')
        return
      } 
    tasks__list.innerHTML +=
        ` <div class="task">
            <div class="task__title">
                ${input.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
                </div>`
    input.value = ''
    taskRemoveClick()     
})

function taskRemoveClick() {
    Array.from(task).forEach((item, index) =>{
        taskRemove[index].onclick = (() => {
            item.remove()
        })
        log(item)
    })
}