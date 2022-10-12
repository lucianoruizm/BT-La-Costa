// Look for elements
const menu = document.querySelector('.menu-mobile')
const hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
// Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    menu.classList.toggle('show')
});

if(!localStorage.getItem('loginChecked')){
    console.log('is not checked')
}else{
    console.log('is checked')
    let loginContent = document.querySelector('.login');
    loginContent.textContent = 'Cerrar Sesión';
    
    loginContent.addEventListener('click', (e) => {
        localStorage.removeItem('loginChecked');
    })
}