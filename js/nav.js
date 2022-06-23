const menuToggler = document.querySelector('#menu-toggler');
menuToggler.addEventListener('click', () => {
  const navMenu = document.querySelector('#nav-menu');
  navMenu.classList.toggle('open');
});