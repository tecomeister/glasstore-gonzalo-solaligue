import { buyRepeatValidation } from "./components/cart/cartActions.js";
import { obtainProducts } from "./components/products/obtainProducts.js";

const showInventory = async () => {
    const container = document.getElementById('container');

    const products = await obtainProducts();

    products.forEach(product => {
        const {id, img: boxart, name, platform, price} = product;
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
        buyProdPrice.innerText += "$"+price;
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
                duration: 750,
                offset: {
                    y: 50
                },
                gravity: "top",
                position: "center",
                className: "toastify",
                }).showToast();
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
    
    document.getElementById('modalerrortxt').innerText === 'Nombre de usuario invalido' ? document.getElementById('container').style.display = "none" : document.getElementById('container').style.display = "flex";
})

export { showInventory };