import { getCart } from "../components/cart/cartActions.js";
import { updateCartTotal } from "../components/cart/cartUpdater.js";
import { obtainStorageCart } from "../components/cart/storage.js";


document.addEventListener('DOMContentLoaded', () =>{
    if(localStorage.getItem('cart')){
        const cart = obtainStorageCart();
        getCart(cart);
        updateCartTotal(cart);
    }
})