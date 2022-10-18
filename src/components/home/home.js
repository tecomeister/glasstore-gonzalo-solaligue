//import { products } from "../products/stock.js";
import { buyRepeatValidation } from "../cart/cartActions.js";
import { obtainProducts } from "../products/obtainProducts.js";

let greetings = document.getElementById('nametoshow');

const hero = () =>{
    if(localStorage.getItem('username') === null){
    }else{
        let name = localStorage.getItem('username');
        greetings.innerText = 'Bienvenido '+name+' a GlasStore!';
    }
}

const container = document.getElementById('container');

const showPaidAds = async () => {
    const products = await obtainProducts();
    
    products.forEach(product  => {
        const {id, img: boxart, name, platform, price, advertisement: ad} = product;

        if(ad === true){
            const buyContainerDiv = document.createElement('div');
            const buyImg = document.createElement('img');
            const buyProdName = document.createElement('h2');
            const buyProdPlat = document.createElement('p');
            const buyProdPrice = document.createElement('h3');
            const buyProdButton = document.createElement('button');
            
            buyContainerDiv.classList.add('buy__div__container');
            buyImg.classList.add('buy__div__img');
            buyProdName.classList.add('buy__div__title');
            buyProdPlat.classList.add('buy__div__platform');
            buyProdPrice.classList.add('buy__div__price');
            buyProdButton.classList.add('buy__div__button');
            
            buyProdButton.setAttribute('id', 'button'+id);
            
            buyImg.src += boxart;
            
            buyProdName.innerText += name;
            buyProdPlat.innerText += platform;
            buyProdPrice.innerText += price;
            buyProdButton.innerText += 'Agregar al Carrito';
            
            
            container.appendChild(buyContainerDiv);
            buyContainerDiv.appendChild(buyImg);
            buyContainerDiv.appendChild(buyProdName);
            buyContainerDiv.appendChild(buyProdPlat);
            buyContainerDiv.appendChild(buyProdPrice);
            buyContainerDiv.appendChild(buyProdButton);
            
            const buyButton = document.getElementById("button"+id);
            buyButton.addEventListener('click', () =>{
                buyRepeatValidation(id);
                Toastify({
                    text: "Producto Agregado al Carrito!",
                    duration: 2000,
                    className: "toastify",
                    gravity: "top",
                    position: "center"
                    }).showToast();
            })
        }
    })
} 

hero();
showPaidAds();