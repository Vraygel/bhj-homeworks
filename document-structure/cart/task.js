const productAdd = document.querySelectorAll('.product__add')
const productQuantityСontrolDec = document.querySelectorAll('.product__quantity-control_dec')
const productQuantityСontrolInc = document.querySelectorAll('.product__quantity-control_inc')
const cartProducts = document.querySelector('.cart__products')
const product = document.querySelectorAll('.product')
const productImage = document.querySelectorAll('.product__image')



productQuantityСontrolInc.forEach((item, index) =>{
    
    item.addEventListener('click', total) 

    function total(event) {
        let productQuantityValue = document.querySelectorAll('.product__quantity-value')
        let num = +(productQuantityValue[index].textContent) + 1

        productQuantityValue[index].textContent  = num  
    }
})

productQuantityСontrolDec.forEach((item, index) =>{
        
    item.addEventListener('click', total) 
    
    function total(event) {
        let productQuantityValue = document.querySelectorAll('.product__quantity-value')
        let num = +(productQuantityValue[index].textContent)

        num == 1? alert("Колчество товара не может быть ноль") : num -=1
        productQuantityValue[index].textContent  = num  
    }
})

productAdd.forEach((item, index) => {
    item.addEventListener('click', productAddFunc)

    function productAddFunc() {
        let productQuantityValue = document.querySelectorAll('.product__quantity-value')
        let cartProduct = Array.from(document.getElementsByClassName('cart__product'))
        let cartProductCount = document.querySelectorAll('.cart__product-count')
        let num = +(productQuantityValue[index].textContent)
        let cartIndex = cartProduct.findIndex(item => product[index].getAttribute('data-id') == item.getAttribute('data-id'))

            if (cartIndex == -1) {
                cartProducts.innerHTML += `
                <div class="cart__product" data-id = ${product[index].getAttribute('data-id')}>
                <img class="cart__product-image" src="${productImage[index].getAttribute('src')}">
        <div class="cart__product-count">${num}</div>
                </div>
              `
            } else {
                cartProductCount[cartIndex].textContent = +(cartProductCount[cartIndex].textContent) + num
            }         
    }
})

