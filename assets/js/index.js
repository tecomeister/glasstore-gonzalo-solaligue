let greetings = document.getElementById('nametoshow');

const hero = () =>{
    if(localStorage.getItem('username') === null || localStorage.getItem('username') === '' || localStorage.getItem('username') === ' '){
    }else{
        let name = localStorage.getItem('username');
        greetings.innerText = 'Bienvenido '+name+' a GlasStore!';
    }
}

hero();