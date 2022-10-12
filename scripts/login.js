document.querySelector('.form-container').addEventListener('submit', (e) => {
    e.preventDefault();
})

function clear(){
    const inputs = document.querySelectorAll('.input-login');
    // Clear the content of each input
    inputs.forEach((input) => input.value = '');
}

// Login
function store(){
    let email = document.getElementById('email');
    let pw = document.getElementById('pw');
    let repeatPw = document.getElementById('repeatPw');
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if(email.value.length == 0){
        alert('Por favor completar en email');

    }else if(pw.value.length == 0){
        alert('Por favor completar en password');

    }else if(email.value.length == 0 && pw.value.length == 0){
        alert('Por favor completar en email y password');

    }else if(pw.value.length > 8){
        alert('Máximo 8 caracteres');

    }else if(!pw.value.match(numbers)){
        alert('Por favor agregue al menos un número');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('Por favor agregue al menos una letra mayúscula');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('Por favor agregue al menos una letra minúscula');

    }else if(pw.value != repeatPw.value){
        alert('Las contraseñas no coinciden');

    }else{
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', pw.value);
        clear()
        alert('Tu cuenta ha sido creada');
    }
}

// Checking login
function check(){

    let storedEmail = localStorage.getItem('email');
    let storedPw = localStorage.getItem('pw');
    let userEmail = document.getElementById('userEmail');
    let userPw = document.getElementById('userPw');
    
    
    if(userEmail.value == storedEmail && userPw.value == storedPw){
        localStorage.setItem('loginChecked', 'isChecked');
        alert('Inicio de sesión exitoso');
        window.open('index.html','_self');
    }else{
        localStorage.removeItem('loginChecked');
        alert('Error al iniciar sesión');
    }

    clear()
}


if(!localStorage.getItem('loginChecked')){
      console.log('is not checked')
}else{
    console.log('is checked')
}