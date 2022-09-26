let yourName = document.getElementById('nametoshow');

const greetings = () => {
    let name = '';

    name = prompt('Ingrese Su Nombre');
    while (name === '' || name === ' ' || name === null){
        name = prompt('Ingrese Su Nombre.');
    }
    alert('El nombre ingresado es: '+name);
    
    confirmation(name);
}

const confirmation = (name) =>{
    if (confirm('Es correcto el nombre?')){
        yourName.innerText = 'Bienvenido '+name+' a GlasStore!';
    }else{
        greetings();
    }
    
}

greetings();
