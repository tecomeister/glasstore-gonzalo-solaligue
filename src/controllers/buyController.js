import { showInventory } from "../App.js"
import { getCart } from "../components/cart/cartactions.js";
import { updateCartTotal } from "../components/cart/cartUpdater.js";
import { products } from "../components/products/stock.js";
import { obtainStorageCart } from "../components/cart/storage.js";


document.addEventListener('DOMContentLoaded', () =>{
    showInventory(products);
    
    if(localStorage.getItem('cart')){
        const cart = obtainStorageCart();
        getCart(cart);
        updateCartTotal(cart);
    }
})