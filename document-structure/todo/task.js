const button = document.querySelector('button')
const tasksList = document.querySelector('.tasks__list')
const input = document.querySelector('input')
const tasks = document.querySelector('.tasks')

button.onclick = (() => {
    if(input.value.trim() == ""){
        input.value = null
        return
      } 
    let addDivClassTask = `
    <div class="task">
        <div class="task__title">${input.value}</div>
        <a href="#" class="task__remove">&times;</a>
    </div>`

   tasksList.insertAdjacentHTML('afterBegin', addDivClassTask)
    input.value = null
    //event.preventDefault() // код работает и с event.preventDefault() и без него.
    // если можно прокоментируйте пожалуйста это
})

tasks.addEventListener('click', function (event) {
    const target = event.target.closest('.task');
    if (!target) return;
    target.remove()
});
