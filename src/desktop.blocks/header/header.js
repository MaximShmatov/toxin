'use strict'

import '../button/button';
import './header.sass';


$('.header-main__button-form-registration button').on('click', formOk);

function formOk(evt) {
  evt.preventDefault();
}