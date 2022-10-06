import { buyRepeatValidation } from "./cartactions.js";
import { products } from "./stock.js";

const container = document.getElementById('container');

const showInventory = () => {
    products.forEach(product => {
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
        
        buyProdButton.setAttribute('id', 'button'+product.id);
        
        buyImg.src += `${product.img}`;
        
        buyProdName.innerText += `${product.name}`;
        buyProdPlat.innerText += `${product.platform}`;
        buyProdPrice.innerText += `${product.price}`;
        buyProdButton.innerText += 'Agregar al Carrito';
        
        
        container.appendChild(buyContainerDiv);
        buyContainerDiv.appendChild(buyImg);
        buyContainerDiv.appendChild(buyProdName);
        buyContainerDiv.appendChild(buyProdPlat);
        buyContainerDiv.appendChild(buyProdPrice);
        buyContainerDiv.appendChild(buyProdButton);
        
        const buyButton = document.getElementById(`button${product.id}`);
        buyButton.addEventListener('click', () =>{
            buyRepeatValidation(product.id);
        })
    })
} 

document.getElementById('loginheaderbtn').addEventListener('click', (e) =>{
    e.preventDefault();
    document.getElementById('container').style.display = "none";
})

document.getElementById('closemodalbtn').addEventListener('click', (e) =>{
    e.preventDefault();
    document.getElementById('container').style.display = "flex";
})

document.getElementById('modalsubmit').addEventListener('click', (e) =>{
    e.preventDefault();
    
    if (document.getElementById('modalerrortxt').innerText === 'Nombre de usuario invalido'){
        document.getElementById('container').style.display = "none";
    }else{
        document.getElementById('container').style.display = "flex";
    }
})

showInventory();