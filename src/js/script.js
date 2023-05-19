const navbarEl = document.querySelector('header .nav-mobile');

document.querySelector("#menu-btn").addEventListener("click", () => {
    navbarEl.classList.toggle('active');

});

window.onscroll = () =>{
navbarEl.classList.remove('active');
}