let cardName = document.getElementById('name');
let cardNumber = document.getElementById('numbers');
let cardname = document.getElementById('cardname');

const cardCheck = () => {
    let name = localStorage.getItem('username');

    if(localStorage.getItem('username') === null || localStorage.getItem('username') === '' || localStorage.getItem('username') === ' '){
        modal.classList.add('modal--show');
        document.getElementById('closemodalbtn').hidden = true;
        randomNumbers();
    }else if (localStorage.getItem('cardnum') === null || localStorage.getItem('cardnum') === '' || localStorage.getItem('cardnum') === ' '){
        randomNumbers();
    }else{
        cardname.innerText = name;
        cardNumber.innerText =localStorage.getItem('cardnum');
    }
}

function randomNumbers() {
    let firstNumbers = '';
    let secondNumbers = '';
    let thirdNumbers = '';
    let fourthNumbers = '';
    
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
    
    localStorage.setItem('cardnum', firstNumbers+' '+secondNumbers+' '+thirdNumbers+' '+fourthNumbers);
    
    cardNumber.innerText =localStorage.getItem('cardnum');
}

cardCheck();