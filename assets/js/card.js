let cardName = document.getElementById('name');
let cardNumber = document.getElementById('numbers');

function randomNumbers() {
    let firstNumbers = 0;
    let secondNumbers = 0;
    let fourthNumbers = 0;
    let thirdNumbers = 0;
    
    min = Math.ceil(4000);
    max = Math.floor(5500);
    firstNumbers = Math.floor(Math.random() * (max - min) + min);
    
    min1 = Math.ceil(2000);
    max1 = Math.floor(9000);
    secondNumbers = Math.floor(Math.random() * (max1 - min1) + min1);
    
    min2 = Math.ceil(2000);
    max2 = Math.floor(9000);
    thirdNumbers = Math.floor(Math.random() * (max2 - min2) + min2);
    
    min3 = Math.ceil(2000);
    max3 = Math.floor(9000);
    fourthNumbers = Math.floor(Math.random() * (max3 - min3) + min3);

    cardNumber.innerText =firstNumbers+' '+secondNumbers+' '+thirdNumbers+' '+fourthNumbers;
}

const cardGenerator = () => {
    
    alert('Para crear su tarjeta debe ingresar unos datos necesarios para la creacion de la misma.');
    const userName = prompt('Ingrese Su Primer Nombre.');
    const userSurname = prompt('Ingrese su Apellido.');
    
    cardName.innerText = userName+' '+userSurname;
}

randomNumbers();
cardGenerator();

