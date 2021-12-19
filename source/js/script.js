const navSite = document.querySelector('.site-list');
const navUser = document.querySelector('.user-list');
const navToggle = document.querySelector('.navigation__toggle');

navToggle.addEventListener('click', function() {
  if (navSite.classList.contains('navigation__list--opened') && navUser.classList.contains('navigation__list--opened')) {
    navToggle.classList.remove('navigation__toggle--closed');
    navUser.classList.remove('navigation__list--opened');
    navSite.classList.remove('navigation__list--opened');
  } else {
    navToggle.classList.add('navigation__toggle--closed');
    navUser.classList.add('navigation__list--opened');
    navSite.classList.add('navigation__list--opened');
  }
});
