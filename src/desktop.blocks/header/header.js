'use strict'

import './header.sass';
import '../button/button';

$('.header-main__button-form-registration button').on('click', formOk);

function formOk (evt) {
  evt.preventDefault();
}