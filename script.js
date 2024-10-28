const togglebutton = document.getElementById('nav_toggle');
const navlinks = document.getElementById('nav_link');
togglebutton.addEventListener('click', () => {
  navlinks.classList.toggle('active');
})