const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registorLink = document.querySelector('.register-link');

registorLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
registorLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});