const subscribeModal = document.querySelector('#subscribe-modal')
const modalClose = document.querySelector('.modal__close')
let log = console.log


+function removeModalActive() {
    if (document.cookie.includes('true')){
        return
    }
    subscribeModal.classList.add('modal_active')
    modalClose.onclick = () => {
        subscribeModal.classList.remove('modal_active')
        document.cookie = 'removeModalActive=true';
    }
}()







