let name = localStorage.getItem('username');
const loginHeader = document.getElementById('loginheaderbtn');

const checkIfLoggedIn = () => {
    if(localStorage.getItem('username') != null){
        loginHeader.innerText = "Cerrar Sesion";
    }else if(localStorage.getItem('username') === null){
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

    modalSection.classList.add('lmodal');
    modalContainer.classList.add('lmodal__container');
    modalTitle.classList.add('lmodal__title');
    modalForm.classList.add('lmodal__form');
    modalLabelUsr.classList.add('lmodal__desc');
    modalInputUsr.classList.add('lmodal__input');
    modalLabelError.classList.add('lmodal__error');
    modalSubmitBtn.classList.add('lmodal__submit');
    modalCloseBtn.classList.add('lmodal__close');

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
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');
    let user = document.getElementById('loginusername');

    if(loginHeader.innerText === "Cerrar Sesion"){
        loginHeader.addEventListener('click', (e) =>{
            e.preventDefault();
            Swal.fire({
                icon: 'success',
                title: 'Sesion Cerrada!',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem('username');
                    localStorage.removeItem('cardnum');
                    location.reload(true);
                }
            });
        })
        }else if(loginHeader.innerText === "Iniciar Sesion"){
            loginHeader.addEventListener('click', (e) =>{
                e.preventDefault();
                modal.classList.add('lmodal--show');
                header.style.display = "none";
                footer.style.display = "none";
            })
    }
    
    closeModal.addEventListener('click', (e) =>{
        e.preventDefault();
        modal.classList.remove('lmodal--show');
        header.style.display = "grid";
        footer.style.display = "block";
        errorSubmit != '' ? errorSubmit.hidden = true : errorSubmit.hidden = false;
    })
    
    modalSubmit.addEventListener('click', (e) =>{
        e.preventDefault();
        localStorage.setItem('username', user.value);
        if(localStorage.getItem('username') === null || localStorage.getItem('username') === '' || localStorage.getItem('username') === ' '){
            errorSubmit.hidden = false;
            errorSubmit.innerText = ('Nombre de usuario invalido');
        }else if (errorSubmit !=''){
            Swal.fire({
                icon: 'success',
                title: 'Sesion Iniciada!',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    errorSubmit.hidden = true;
                    modal.classList.remove('lmodal--show');
                    header.style.display = "grid";
                    footer.style.display = "block";
                    user.value = '';
                    location.reload(true);
                }
            });
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Sesion Iniciada!',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    modal.classList.remove('lmodal--show');
                    header.style.display = "grid";
                    footer.style.display = "block";
                    user.value = '';
                    location.reload(true);
                }
            });
        }
    })
}

checkIfLoggedIn();
createLoginModal();