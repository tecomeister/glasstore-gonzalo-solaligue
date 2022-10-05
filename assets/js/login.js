let name = localStorage.getItem('username');
const loginHeader = document.getElementById('loginheaderbtn');

const checkIfLoggedIn = () => {
    if(localStorage.getItem('username') != null){
        loginHeader.innerText = "";
        loginHeader.innerText = "Cerrar Sesion";
    }else if(localStorage.getItem('username') === null){
        loginHeader.innerText = "";
        loginHeader.innerText = "Iniciar Sesion";
    }
}

const createLoginModal = () => {
    const modalSection = document.createElement('section');
    const modalContainer = document.createElement('div');
    const modalTitle = document.createElement('h2');
    const modalForm = document.createElement('form');
    const modalLabelUsr = document.createElement('label');
    const modalInputUsr = document.createElement('input');
    const modalLabelError = document.createElement('label');
    const modalSubmitBtn = document.createElement('button');
    const modalCloseBtn = document.createElement('button');
    const pageMain = document.getElementById('main');

    modalSection.setAttribute('id', 'modal');
    modalInputUsr.setAttribute('id', 'loginusername');
    modalSubmitBtn.setAttribute('id', 'modalsubmit');
    modalCloseBtn.setAttribute('id', 'closemodalbtn');
    modalLabelError.setAttribute('id', 'modalerrortxt');

    modalSection.classList.add('modal');
    modalContainer.classList.add('modal__container');
    modalTitle.classList.add('modal__title');
    modalForm.classList.add('modal__form');
    modalLabelUsr.classList.add('modal__desc');
    modalInputUsr.classList.add('modal__input');
    modalLabelError.classList.add('modal__error');
    modalSubmitBtn.classList.add('modal__submit');
    modalCloseBtn.classList.add('modal__close');

    modalTitle.innerText += "Iniciar Sesion";
    modalLabelUsr.innerText += "Nombre de Usuario:";
    modalSubmitBtn.innerText += "Iniciar Sesion";
    modalCloseBtn.innerText += "Cerrar";

    pageMain.appendChild(modalSection);
    modalSection.appendChild(modalContainer);
    modalContainer.appendChild(modalTitle);
    modalContainer.appendChild(modalForm);
    modalContainer.appendChild(modalCloseBtn);
    modalForm.appendChild(modalLabelUsr);
    modalForm.appendChild(modalInputUsr);
    modalForm.appendChild(modalLabelError);
    modalForm.appendChild(modalSubmitBtn);

    login();
}

function login () {
    const modal = document.getElementById('modal');
    const modalSubmit = document.getElementById('modalsubmit');
    const closeModal = document.getElementById('closemodalbtn');
    const errorSubmit = document.getElementById('modalerrortxt');
    let user = document.getElementById('loginusername');

    if(loginHeader.innerText === "Cerrar Sesion"){
        loginHeader.addEventListener('click', (e) =>{
            e.preventDefault();
            localStorage.removeItem('username');
            localStorage.removeItem('cardnum');
            location.reload(true);
        })
        }else if(loginHeader.innerText === "Iniciar Sesion"){
            loginHeader.addEventListener('click', (e) =>{
                e.preventDefault();
                modal.classList.add('modal--show');
            })
    }
    
    closeModal.addEventListener('click', (e) =>{
        e.preventDefault();
        modal.classList.remove('modal--show');
        if(errorSubmit != ''){
            errorSubmit.hidden = true;
        }else{
            errorSubmit.hidden = false;
        }
    })
    
    modalSubmit.addEventListener('click', (e) =>{
        e.preventDefault();
        localStorage.setItem('username', user.value);
        if(localStorage.getItem('username') === null || localStorage.getItem('username') === '' || localStorage.getItem('username') === ' '){
            errorSubmit.hidden = false;
            errorSubmit.innerText = ('Nombre de usuario invalido');
        }else if (errorSubmit !=''){
            errorSubmit.hidden = true;
            modal.classList.remove('modal--show');
            user.value = '';
            location.reload(true);
        }else{
            modal.classList.remove('modal--show');
            user.value = '';
            location.reload(true);
        }
    })
}

checkIfLoggedIn();
createLoginModal();