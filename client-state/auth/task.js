const signin = document.querySelector('#signin');
const userId = document.querySelector('#user_id');
const welcome = document.querySelector('#welcome');

let id = localStorage.getItem('userId');
if(id){
    welcomeFunc(id);
}

function welcomeFunc(id) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = id;
}

document.addEventListener('submit', (event) =>{
    event.preventDefault();
    const signinForm = document.querySelector('#signin__form');
    const formData = new FormData(signinForm);
    let xhr = new XMLHttpRequest();
   
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);
    xhr.addEventListener('readystatechange', () =>{
        if(xhr.readyState === xhr.DONE){
            const parse = JSON.parse(xhr.responseText);

            if(parse.success){
                welcomeFunc(id);
                userId.textContent = parse.user_id;
                localStorage.setItem('userId', userId.textContent);
            } else{                
                alert('Не верный логин или пароль');
            }
        }       
    })
})
