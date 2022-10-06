import { eraseCartProduct } from "./cartactions.js";

const cartModal = document.querySelector('.cmodal');
const openCart = document.getElementById('cartbtnheader');
const closeCart = document.getElementById('cartclosebtn');
const buyCards = document.getElementById('container');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const cartModalContainer = document.querySelector('.cmodal__container');

openCart.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.classList.add('cmodal--show')
    header.style.display = "none";
    footer.style.display = "none";
});

closeCart.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.classList.remove('cmodal--show')
    header.style.display = "grid";
    footer.style.display = "block";
});

cartModalContainer.addEventListener('click', (e) =>{
    e.preventDefault();
    e.stopPropagation();
    if(e.target.classList.contains('cmodal__erasebutton')){
        eraseCartProduct(e.target.value);
    }
})