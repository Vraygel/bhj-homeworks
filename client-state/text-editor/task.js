const editor = document.querySelector('#editor');
const button = document.querySelector('button');
let editTextGet = localStorage.getItem('text');

if(editTextGet){
    editor.value = editTextGet;
}

let editTextSet = ''
editor.oninput = () => {
    editTextSet = editor.value;
    localStorage.setItem('text', editTextSet);
}

button.onclick = () => {
    editor.value = null;
}
