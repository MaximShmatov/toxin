'use strict'

import('./header-main.sass');
import('../button/button');

$('.header-main__button-form-registration button').on('click', formOk);

function formOk (evt) {
  evt.preventDefault();
  location.href = 'page_registration.html';
}