const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');
const button = document.getElementsByClassName('poll__answer');
let xhr = new XMLHttpRequest();
    
xhr.open('get', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        let value = JSON.parse(xhr.responseText);
        pollTitle.insertAdjacentHTML('afterEnd', `${value.data.title}`);
        value.data.answers.forEach((element, index)=> {
            pollAnswers.insertAdjacentHTML('afterEnd', `<button class="poll__answer">
            ${element}
            </button>`);
        });

        for(let temp of button){
            temp.onclick  = function(event){
                alert(`Вы ответили: \n ${event.target.textContent} \n Спасибо, ваш голос засчитан!`);
                window.location.reload();
            }
        }    
    };
};

