// Look for elements
const menu = document.querySelector('.menu-mobile')
const hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
// Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    menu.classList.toggle('show')
});

// Login Text Content- Login check- Post button
let postForm = document.getElementById('post-form');
let postBtn = document.querySelector('.btn-offers');

if(!localStorage.getItem('loginChecked')){
    console.log('is not checked')
    postForm.style.display = 'none';

    postBtn.addEventListener('click', () => {
        alert('Por favor inicie sesión para poder crear una publicación');
    })

}else{
    console.log('is checked')
    let loginContent = document.querySelector('.login');
    loginContent.textContent = 'Cerrar Sesión';
    
    postBtn.addEventListener('click', () => {
        postForm.style.display = 'flex';
    })

    loginContent.addEventListener('click', () => {
        localStorage.removeItem('loginChecked');
    })
}