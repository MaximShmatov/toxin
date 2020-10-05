'use strict'

import './form-search-room.sass';
import '../button/button';
import '../dropdown-quantity/dropdown-quantity';
import {DateRange} from "../date-range/date-range";
import {DropdownQuantity} from "../dropdown-quantity/dropdown-quantity";

let $formSearchRoom = $('.form-search-room');

new DateRange($formSearchRoom.find('.date-range'));
new DropdownQuantity($formSearchRoom.find('.dropdown-quantity'));
$formSearchRoom.find('.form-search-room__submit').on('click', formOk);

function formOk (evt) {
  evt.preventDefault();
}