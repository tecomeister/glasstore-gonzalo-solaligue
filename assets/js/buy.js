const products = [
    {
        id: 1,
        img:'../resources/g1.png',
        name: "Death Stranding",
        platform: "Juego PS5",
        price: "15000"
    },
    {
        id: 2,
        img:'../resources/g2.png',
        name: "Gran Turismo 7",
        platform: "Juego PS5",
        price: "10000"
    },
    {
        id: 3,
        img:'../resources/g3.png',
        name: "Horizon Forbidden West",
        platform: "Juego PS5",
        price: "20000"
    },
    {
        id: 4,
        img:'../resources/g4.png',
        name: "God of War Ragnarok",
        platform: "Juego PS5",
        price: "20000"
    },
    {
        id: 5,
        img:'../resources/g5.png',
        name: "GoW-R Jotnar Edition",
        platform: "Juego PS5",
        price: "50000"
    },
    {
        id: 6,
        img:'../resources/g6.png',
        name: "R&C Rift Apart",
        platform: "Juego PS5",
        price: "10000"
    },
    {
        id: 7,
        img:'../resources/g7.png',
        name: "TLOU Part 1",
        platform: "Juego PS5",
        price: "7500"
    },
    {
        id: 8,
        img:'../resources/g8.png',
        name: "Tribes of Midgard",
        platform: "Juego PS5",
        price: "10000"
    },
    {
        id: 9,
        img:'../resources/c2.png',
        name: "PS5",
        platform: "Consola",
        price: "250000"
    },
    {
        id: 10,
        img:'../resources/c1.png',
        name: "PS5 Edicion Horizon",
        platform: "Consola",
        price: "300000"
    },
]

const container = document.getElementById('container');

products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('buy__div__container');
    
    div.innerHTML += `
        <img src="${product.img}" alt="Imagen" class="buy__div__img">
        <a href="#" class="buy__div__title">${product.name}</a>
        <p class="buy__div__platform">${product.platform}</p>
        <h3 class="buy__div__price">$ ${product.price}</h3>
        `;
    
    container.appendChild(div);
})