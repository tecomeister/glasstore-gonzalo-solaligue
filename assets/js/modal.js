const cartModal = document.querySelector('.cmodal');
const openCart = document.getElementById('cartbtnheader');
const closeCart = document.getElementById('cartclosebtn');
const buyCards = document.getElementById('container');
const header = document.getElementById('header');
const footer = document.getElementById('footer');

openCart.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.classList.add('cmodal--show')
    buyCards.style.display = "none";
    header.style.display = "none";
    footer.style.display = "none";
});

closeCart.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.classList.remove('cmodal--show')
    buyCards.style.display = "flex";
    header.style.display = "grid";
    footer.style.display = "block";
});