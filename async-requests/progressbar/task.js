const progress = document.getElementById( 'progress' );
let form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    formData = new FormData(form);
    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded/event.total;
    }
    
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
})
