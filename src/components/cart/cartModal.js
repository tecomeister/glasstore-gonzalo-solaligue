import { eraseCartProduct } from "./cartactions.js";

const cartModal = document.querySelector('.cmodal');
const openCart = document.getElementById('cartbtnheader');
const buyCart = document.getElementById('cartbuybtn');
const closeCart = document.getElementById('cartclosebtn');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const cartModalContainer = document.querySelector('.cmodal__container');

openCart.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.classList.add('cmodal--show')
});

buyCart.addEventListener('click', (e) => {
    e.preventDefault();
    
});

closeCart.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.classList.remove('cmodal--show')
});

cartModalContainer.addEventListener('click', (e) =>{
    e.preventDefault();
    e.stopPropagation();
    
    if(e.target.classList.contains('cmodal__erasebutton')){
        Swal.fire({
            icon: 'question',
            title: 'Realmente deseas borrar este articulo del carrito?',
            showCancelButton: true,
            color: '#000000',
            background: '#ffffff',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borralo',
            cancelButtonText: 'No, Dejalo',
            showClass: {popup: 'animate__animated animate__fadeIn'},
            hideClass: {popup: 'animate__animated animate__fadeOut'},
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Borrado Con Exito!',
                'El articulo fue eliminado correctamente',
                'success',
                eraseCartProduct(e.target.value)
            )}
        })
    }
    
    if(e.target.classList.contains('cmodal__button__buy')){
        Swal.fire({
            icon: 'question',
            title: 'Deseas Comprar los items de tu carrito?',
            showCancelButton: true,
            color: '#000000',
            background: '#ffffff',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Comprar',
            cancelButtonText: 'No, Volver',
            showClass: {popup: 'animate__animated animate__fadeIn'},
            hideClass: {popup: 'animate__animated animate__fadeOut'},
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Compra Exitosa!',
                'La compra se realizo correctamente',
                'success',
                buyCart.classList.remove('cmodal__button__buy__show'),
                localStorage.removeItem('cart'),
                setTimeout(() =>{
                    location.reload(true);
                }, 2000),
            )}
        })
    }
})