const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('navigation--closed')) {
    navToggle.classList.toggle('navigation__toggle--closed');
    navMain.classList.toggle('navigation--opened');
  } else {
    navToggle.classList.toggle('navigation__toggle--closed');
    navMain.classList.toggle('navigation--opened');
  }
});
