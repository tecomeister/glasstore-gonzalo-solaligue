import { obtainProducts } from "../products/obtainProducts.js";
import { updateCartTotal } from "./cartUpdater.js";
import { obtainStorageCart } from "./storage.js";

let cart = [];

const buyRepeatValidation = (productId) =>{
    
    if(localStorage.getItem('cart')){
        cart = obtainStorageCart();
    }
    
    const repeatedProduct = cart.find(product => product.id === productId);
    
    if (repeatedProduct){
        repeatedProduct.quantity++;
        const productQuantity = document.getElementById(`quantity${repeatedProduct.id}`);
        productQuantity.innerText = `Cantidad: ${repeatedProduct.quantity}`;
        updateCartTotal(cart);
    }else{
        addToCart(productId);
    }
}

const addToCart = async (productId) =>{
    const products = await obtainProducts();

    const cartContainer = document.getElementById('cartitemcontainer');
    const product = products.find(product => product.id === productId);
    const {id, name, price, quantity} = product;
    cart.push(product);
    
    const cartDiv = document.createElement('div');
    const productName = document.createElement('p');
    const productPrice = document.createElement('p');
    const productQuantity = document.createElement('p');
    const productEraseButton = document.createElement('button');
    
    cartDiv.classList.add('cmodal__product');
    productName.classList.add('cmodal__desc');
    productPrice.classList.add('cmodal__desc');
    productQuantity.classList.add('cmodal__desc');
    productEraseButton.classList.add('cmodal__erasebutton');

    productQuantity.setAttribute('id', 'quantity'+id);
    productEraseButton.setAttribute('id', 'erase'+id);
    productEraseButton.setAttribute('value', id);

    productName.innerText += name;
    productPrice.innerText += 'Precio: '+price;
    productQuantity.innerText += 'Cantidad: '+quantity;
    productEraseButton.innerText += "Eliminar Producto";
    
    cartContainer.appendChild(cartDiv);
    cartDiv.appendChild(productName);
    cartDiv.appendChild(productPrice);
    cartDiv.appendChild(productQuantity);
    cartDiv.appendChild(productEraseButton);
    
    updateCartTotal(cart);
}

const getCart = (cart) =>{
    const cartContainer = document.getElementById('cartitemcontainer');
    
    cartContainer.innerHTML = '';

    cart.forEach(product => {
        const {id, name, price, quantity} = product;
        const cartDiv = document.createElement('div');
        const productName = document.createElement('p');
        const productPrice = document.createElement('p');
        const productQuantity = document.createElement('p');
        const productEraseButton = document.createElement('button');
        
        cartDiv.classList.add('cmodal__product');
        productName.classList.add('cmodal__desc');
        productPrice.classList.add('cmodal__desc');
        productQuantity.classList.add('cmodal__desc');
        productEraseButton.classList.add('cmodal__erasebutton');
        
        productQuantity.setAttribute('id', 'quantity'+id);
        productEraseButton.setAttribute('id', 'erase'+id);
        productEraseButton.setAttribute('value', id);
        
        productName.innerText += name;
        productPrice.innerText += 'Precio: '+price;
        productQuantity.innerText += 'Cantidad: '+quantity;
        productEraseButton.innerText += "Eliminar Producto";
        
        cartContainer.appendChild(cartDiv);
        cartDiv.appendChild(productName);
        cartDiv.appendChild(productPrice);
        cartDiv.appendChild(productQuantity);
        cartDiv.appendChild(productEraseButton);
    });
}

const eraseCartProduct = (productId)  =>{
    const storageCart = obtainStorageCart();
    const updatedCart = storageCart.filter(product => product.id != productId);
    
    updateCartTotal(updatedCart);
    getCart(updatedCart);
}

export{ addToCart, buyRepeatValidation, getCart, eraseCartProduct};