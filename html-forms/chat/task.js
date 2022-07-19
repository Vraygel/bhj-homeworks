const chatWidget = document.querySelector('.chat-widget')
const chatWidgetSide = document.querySelector('.chat-widget__side')
const input = document.querySelector('input')
const messages = document.querySelector('.chat-widget__messages')
const messageRandom = [
  "Добрый день!!!",
  "Могу чем-то помочь?",
  "Мы вам не чего не продавали!",
  "Где Ваша совесть?",
  "Всегда думал, что для жизни, кроме высшего образования, нужно иметь немного сообразительности. Глядя на тебя, повторно убеждаюсь в этом.",
  "Даже фотошоп не исправит ошибок природы.",
  "Он хамил так, как будто у него дома запасная голова...",
  "Девушка, а вы в детстве симпатичная были или как сейчас?",
  "Береги свою голову, вдруг там мозги!",
  "Будешь проходить мимо — проходи.",
  "Бесит, когда моё имя носят тупые люди.",
  "А я смотрю ты смешной такой!",
  "Это у тебя последствия черепно-мозговой травмы? Или плохая наследственность?",
  "Корону сними, потолок царапает.",
  "Бьюсь об заклад, тебя зачали на спор!"]

const messageQuestion = [
  "Вы не ответили",
  "Могу еще чем-то помочь?",
  "В молчанку будем играть?",
  "Говори, говрю! Кому говорю, говори!",
  "И так ваш ответ:",
  "Вы в этом абсолютно уверены?"
]

chatWidgetSide.addEventListener('click', () => chatWidget.classList.add('chat-widget_active'))

function timeMessage() {
    let hours = new Date().getHours()
    hours = hours < 10 ? '0' + hours : hours
    let minutes = new Date().getMinutes()
    minutes = minutes < 10 ? '0' + minutes : minutes
    let time = `${hours}:${minutes}`
    return time
}

input.oninput 
input.addEventListener('keypress', enterMessage);

function enterMessage(event) {
    if(event.key == 'Enter'){
      if(input.value == ''){
        alert('Сообщение не может быть пустое')
        return
      } 
      clientMessage()
      input.value = null
      scrollMessage()
      setTimeout(autoMessage, 500)
    } 
}

function clientMessage() {
  messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${timeMessage()}</div>
    <div class="message__text">
     ${input.value}
    </div>
  </div>
`;
}

function autoMessage() {
    messages.innerHTML += `
        <div class="message">
          <div class="message__time">${timeMessage()}</div>
          <div class="message__text">
           ${messageRandom[Math.floor((Math.random()) * messageRandom.length)]}
          </div>
        </div>
      `;
      scrollMessage()
      timerMessage()
}

function randomIndex() {
  console.log(Math.floor(Math.random()) * messageRandom.length)
  return Math.floor((Math.random()) * messageRandom.length)   
}

function scrollMessage() {
  messages.getElementsByClassName('message')[messages.getElementsByClassName('message').length - 1].scrollIntoView()   
}


function timerMessage() {
  let tick = 0
  let ticks = setInterval(function() {
    tick++;
    if (tick == 30 ) {
      autoQuestion()
      clearInterval(ticks);
    } else {
      console.log(tick);
    }
  }, 100)
}

function autoQuestion() {
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${timeMessage()}</div>
    <div class="message__text">
     ${messageQuestion[Math.floor((Math.random()) * messageQuestion.length)]}
    </div>
  </div>
`;
scrollMessage()
}