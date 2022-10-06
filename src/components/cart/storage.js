const saveStorageCart = (buyCart) =>{
    localStorage.setItem('cart', JSON.stringify(buyCart));
};

const obtainStorageCart = () =>{
    const cartStorage = JSON.parse(localStorage.getItem('cart'));
    return cartStorage;
};

const cart = obtainStorageCart();

export { saveStorageCart, obtainStorageCart };