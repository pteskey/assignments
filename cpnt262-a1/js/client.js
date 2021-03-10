'use strict';

// Variables

const menuBtn = document.querySelector('.menu-btn');
const ul = document.querySelector('.nav');
let menuOpen = false;

// Events

menuBtn.addEventListener('click', function () {
  ul.classList.toggle('movein');

  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});