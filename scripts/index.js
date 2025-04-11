const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
  this.classList.toggle('active');
  document.body.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
  console.log(this.window.pageYOffset);
  console.log(navbar);
  console.log(navbar.classList);
  console.log(navbar.classList.contains('active'));
});
