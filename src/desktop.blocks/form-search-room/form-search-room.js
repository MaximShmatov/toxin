'use strict'

import('../button/button');
import('../date-range/date-range');
import('../dropdown/dropdown');
import('./form-search-room.sass');

$('.form-search-room__submit').on('click', formOk);

function formOk (evt) {
  evt.preventDefault();
  location.href = 'pageSearchRoom.html';
}