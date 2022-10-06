import { updateCartTotal } from "./cartUpdater.js";
import { products } from "./stock.js";

let cart = [];

const buyRepeatValidation = (productId) =>{
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

const addToCart = (productId) =>{
    const cartContainer = document.getElementById('cartitemcontainer');
    const product = products.find(product => product.id === productId);
    
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
    productEraseButton.classList.add('cmodal__button');

    productQuantity.setAttribute('id', 'quantity'+product.id);
    productEraseButton.setAttribute('id', 'erase'+product.id);
    productEraseButton.setAttribute('value', product.id);

    productName.innerText += product.name;
    productPrice.innerText += `Precio: ${product.price}`;
    productQuantity.innerText += `Cantidad: ${product.quantity}`;
    productEraseButton.innerText += "Eliminar Producto";
    
    cartContainer.appendChild(cartDiv);
    cartDiv.appendChild(productName);
    cartDiv.appendChild(productPrice);
    cartDiv.appendChild(productQuantity);
    cartDiv.appendChild(productEraseButton);
    
    updateCartTotal(cart);
}

export{ addToCart, buyRepeatValidation };