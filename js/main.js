const logo = document.querySelector('.hdrMn img');
const hdr = document.querySelector('.hdrMn');
const nav = document.querySelector('.hdrMn nav');

window.addEventListener('scroll', ()=>{
    logo.classList.toggle('logo__scroll', scrollY > 0);
    hdr.classList.toggle('hdr__scroll', scrollY > 0);
    nav.classList.toggle('nav__scroll', scrollY > 0);
});