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
    let userName = '';
    let userSurname = '';
    
    alert('Para crear su tarjeta debe ingresar su nombre y apellido.');
    userName = prompt('Ingrese Su Primer Nombre.');
    while (userName === '' || userName === ' ' || userName === null){
        userName = prompt('Ingrese Su Primer Nombre.');
    }
    userSurname = prompt('Ingrese su Apellido.');
    while (userSurname === '' || userSurname === ' ' || userSurname === null){
        userSurname = prompt('Ingrese su Apellido.');
    }
    alert('Los datos ingresados son:'+'\nNombre: '+userName+'\nApellido: '+userSurname);
    
    confirmation(userName, userSurname);
}

const confirmation = (userName, userSurname) =>{
    if (confirm('Son correctos los datos?')){
        cardName.innerText = userName+' '+userSurname;
    }else{
        cardGenerator();
    }
}

randomNumbers();
cardGenerator();

