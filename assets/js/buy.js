const container = document.getElementById('container');

const showInventory = () => {
    products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('buy__div__container');
        
        div.innerHTML += `
            <img src="${product.img}" alt="Imagen" class="buy__div__img">
            <a href="../pages/article.html" class="buy__div__title">${product.name}</a>
            <p class="buy__div__platform">${product.platform}</p>
            <h3 class="buy__div__price">$ ${product.price}</h3>
            `;
        
        container.appendChild(div);
    })
}

showInventory();


