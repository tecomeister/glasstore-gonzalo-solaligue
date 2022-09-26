let yourName = document.getElementById('nametoshow');

const greetings = () => {
    const name = prompt('Ingrese Su Nombre');
    
    yourName.innerText = 'Bienvenido '+name+' a GlasStore!';
}

greetings();