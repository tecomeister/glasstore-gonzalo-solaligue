const updateCartTotal = (cart) => {
    const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);
    const totalBuyPrice = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    
    showTotalOnCart(totalQuantity, totalBuyPrice);
}

const showTotalOnCart = (totalQuantity, totalBuyPrice) =>{
    const cartCounter = document.getElementById('cartcounterheader');
    const totalPrice = document.getElementById('carttotaltxt');

    cartCounter.innerText = totalQuantity;
    totalPrice.innerText = "Total: "+totalBuyPrice;
}

export {updateCartTotal};