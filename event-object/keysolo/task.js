class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.onkeydown = (event) =>{
      
      if(event.key == this.currentSymbol.textContent){
        this.success()
        console.log('да')

      } else{
        this.fail()
        
      }

    }
   
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
      'лето', 'рота', 'мина', 'сено', 'дуга', 'воля', 'мера', 'лицо', 'чудо', 'мясо', 'сила', 'поле', 'рука', 'дело', 'шина', 'кули', 'лужа', 'дача', 'мыло', 'раки', 'дары', 'щука', 'дыня', 'репа', 'доля', 'семя', 'жила', 'рыба', 'кожа', 'мука', 'шару', 'баня', 'ваза', 'гиря', 'перо', 'бита', 'цена', 'зима', 'тура', 'каша', 'жиры', 'вена', 'пуля', 'туча', 'душа', 'фара', 'беда', 'дыра', 'буря', 'кино', 'лыжи', 'весы', 'темя', 'сажа', 'жара', 'тара', 'рабы', 'бюро', 'рога', 'сало', 'гора', 'пила', 'тело', 'тина', 'боты', 'лона', 'рака', 'шило', 'сито', 'жало', 'цепи', 'муха', 'кило', 'роза', 'щека', 'тюки', 'бусы', 'сума', 'река', 'кета', 'кеды', 'заря', 'чаща', 'межа', 'нива', 'хина', 'море', 'зубы', 'веха', 'вена', 'ходы', 'поле', 'люди', 'тема', 'вода', 'рана', 'мыши', 'туча', 'часы', 'шуба', 'роща', 'коса', 'вещи', 'лыко', 'чаша', 'сера', 'нора', 'зола', 'лупа', 'сова', 'гены', 'куры', 'жаба', 'зона', 'каре', 'меха', 'роба', 'ноги', 'зори', 'жито', 'лучи', 'соня', 'басы', 'пена', 'софа', 'луна', 'поля', 'муза', 'щели', 'ноша', 'чуда', 'лиса', 'пары', 'соты', 'кума', 'ниша', 'кора', 'шумы', 'губа', 'тяга', 'мода', 'руда', 'виза', 'доза', 'коза', 'лоза', 'дека', 'дума', 'вина', 'лапа', 'щепа', 'липа', 'кара', 'пара', 'лира', 'нора', 'фора', 'фура', 'леса', 'роса', 'вата', 'дата', 'хата', 'фата', 'нота', 'мята', 'веха', 'соха', 'сеча', 'куча',
      'суша', 'туша', 'теща', 'пища', 'гуща', 'пуща', 'ложе', 'таре', 'горе', 'пюре', 'кофе', 'леди', 'лаки', 'маки', 'хаки', 'веко', 'быки', 'сани', 'сени', 'пони', 'пари', 'дети', 'печи', 'небо', 'любо', 'диво', 'надо', 'дуло', 'мимо', 'руно', 'сыро', 'вето', 'лихо', 'тихо', 'табу', 'рагу', 'кеды', 'лазы', 'тазы', 'чары', 'хоры', 'бусы', 'латы', 'ревю', 'иена', 'тетя'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))


