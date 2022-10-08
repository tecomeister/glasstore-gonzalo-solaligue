let cardName = document.getElementById('name');
let cardNums = document.getElementById('numbers');
let cardname = document.getElementById('cardname');
const header = document.getElementById('header');
const footer = document.getElementById('footer');

const cardNumbers = [];

const cardCheck = () => {
    let name = localStorage.getItem('username');

    if(localStorage.getItem('username') === null || localStorage.getItem('username') === '' || localStorage.getItem('username') === ' '){
        modal.classList.add('lmodal--show');
        header.style.display = "none";
        footer.style.display = "none";
        document.getElementById('closemodalbtn').hidden = true;
        randomNumbers();
    }else if (localStorage.getItem('cardnum') === null || localStorage.getItem('cardnum') === '' || localStorage.getItem('cardnum') === ' '){
        randomNumbers();
    }else{
        cardname.innerText = name;
        cardNums.innerText =localStorage.getItem('cardnum');
    }
}

function randomNumbers() {
    let firstNumbers = '';
    let secondNumbers = '';
    let thirdNumbers = '';
    let fourthNumbers = '';
    
    let min = Math.ceil(4000);
    let max = Math.floor(5500);
    firstNumbers = Math.floor(Math.random() * (max - min) + min);
    
    let min1 = Math.ceil(2000);
    let max1 = Math.floor(9000);
    secondNumbers = Math.floor(Math.random() * (max1 - min1) + min1);
    
    let min2 = Math.ceil(2000);
    let max2 = Math.floor(9000);
    thirdNumbers = Math.floor(Math.random() * (max2 - min2) + min2);
    
    let min3 = Math.ceil(2000);
    let max3 = Math.floor(9000);
    fourthNumbers = Math.floor(Math.random() * (max3 - min3) + min3);
    
    cardNumbers.push(firstNumbers);
    cardNumbers.push(secondNumbers);
    cardNumbers.push(thirdNumbers);
    cardNumbers.push(fourthNumbers);

    const cardCompleteNumbers = [...cardNumbers].join(' ');

    localStorage.setItem('cardnum', cardCompleteNumbers);
    
    cardNums.innerText =localStorage.getItem('cardnum');
}

cardCheck();