import { saveStorageCart } from "./storage.js";

const updateCartTotal = (cart) => {
    const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);
    const totalBuyPrice = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    
    showTotalOnCart(totalQuantity, totalBuyPrice);
    saveStorageCart(cart);
}

const showTotalOnCart = (totalQuantity, totalBuyPrice) =>{
    const cartCounter = document.getElementById('cartcounterheader');
    const totalPrice = document.getElementById('carttotaltxt');
    const buyCart = document.getElementById('cartbuybtn');
    
    if (totalBuyPrice <= 0){
        totalPrice.innerText = "Tu carrito está vacio!";
        buyCart.classList.remove('cmodal__button__buy__show');
    }else{
        cartCounter.innerText = totalQuantity;
        totalPrice.innerText = "Total: $"+totalBuyPrice;
        buyCart.classList.add('cmodal__button__buy__show');
    }
}

export {updateCartTotal};