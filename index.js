$(document).ready(() => {
  let hamburgerMenu = $('.hamburger');
  let navbar = $('.navbar');

  hamburgerMenu.click(() => {
    hamburgerMenu.toggleClass('toggle');
    navbar.toggleClass('toggle');
  });
});