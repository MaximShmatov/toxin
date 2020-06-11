'use strict'

import('./date-range.sass');
import('../button/button');
import {dateComeIn, dateCheckOut, datePickerToggle} from '../date-picker/date-picker';


let $dateRange = $('.date-range');
let $inButton = $dateRange.find('.date-range__head-in-button');
let $outButton = $dateRange.find('.date-range__head-out-button');
let $inDate = $dateRange.find('.date-range__head-in-date');
let $outDate = $dateRange.find('.date-range__head-out-date');
let defaultDate = 'дд.мм.гггг';
let date = new Date();

$inButton.on('click', datePickerToggle);
$outButton.on('click', datePickerToggle);
$dateRange.on('date-picker_selected-in', setDateIn)
$dateRange.on('date-picker_selected-out', setDateOut)
$dateRange.on('date-picker_clear', setDefaultDate)

datePickerToggle();

function setDateIn() {
  date.setTime(dateComeIn);
  $inDate.text(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`);
}

function setDateOut() {
  date.setTime(dateCheckOut);
  $outDate.text(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`);
}

function setDefaultDate() {
  $inDate.text(defaultDate);
  $outDate.text(defaultDate);
}






