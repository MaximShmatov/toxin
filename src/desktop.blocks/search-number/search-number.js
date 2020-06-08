'use strict'

import('../button/button');
import('../date-range/date-range');
import('../quantity-select/quantity-select');
import('./search-number.sass');

$('.search-number__form-submit').on('click', formOk);

function formOk (evt) {
  evt.preventDefault();
  location.href = 'pageSearchRoom.html';
}