const commentSend = document.getElementById("send");
const comment = document.getElementById("commentbox");
const commentDiv = document.getElementById("commentdiv");
const cart = document.getElementById("buy");
const quantityPlus = document.getElementById("quantityplus");
const quantityMinus = document.getElementById("quantityminus");
const quantityText = document.getElementById("quantity");

let counter = 1;

quantityPlus.addEventListener("click", () =>{
    counter++;
    refreshCounter();
});

quantityMinus.addEventListener("click", () =>{
    counter--;
    refreshCounter();
});

cart.addEventListener("click", () =>{
    let totalPrice = counter*products[0].price;
    console.log("Añadido al carrito"+"\nNombre: "+products[0].name+"\nPrecio: $"+products[0].price+"\nCantidad: "+counter+"\nTotal: $"+totalPrice);
    alert("Añadido al carrito"+"\nNombre: "+products[0].name+"\nPrecio: $"+products[0].price+"\nCantidad: "+counter+"\nTotal: $"+totalPrice);
});

commentSend.addEventListener("click", () =>{
    const newcomment = document.createElement('p');
    
    newcomment.classList.add('article__div__comment');
    newcomment.innerText = (comment.value);
    
    console.log("Nuevo Comentario: "+comment.value);
    comment.value = '';
    
    commentdiv.appendChild(newcomment);
});

refreshCounter = () =>{
    quantityText.innerText = "Cantidad: "+counter;
}