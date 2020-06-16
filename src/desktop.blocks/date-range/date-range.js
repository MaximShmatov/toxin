'use strict'

import('../button/button');
import {dateComeIn, dateCheckOut, datePickerToggle} from '../date-picker/date-picker';

import('./date-range.sass');


let $dateRange = $('.date-range');
let $inButton = $dateRange.find('.date-range__head-in-button');
let $outButton = $dateRange.find('.date-range__head-out-button');
let $inDate = $dateRange.find('.date-range__head-in-date');
let $outDate = $dateRange.find('.date-range__head-out-date');
let defaultDate = 'дд.мм.гггг';
let date = new Date();

$inButton.on('click', datePickerToggle);
$outButton.on('click', datePickerToggle);
$dateRange.on('date-picker_selected-in', setDateIn);
$dateRange.on('date-picker_selected-out', setDateOut);
$dateRange.on('date-picker_clear', setDefaultDate);
$dateRange.on('date-picker_submit', setDateSessionStorage);

if (sessionStorage.getItem('dateCheckOut') === null) {
  setDefaultDate();
} else {
  date.setTime(Number(sessionStorage.getItem('dateComeIn')));
  $inDate.text(`${date.getDate()}.${getMonth(date.getMonth())}.${date.getFullYear()}`);
  date.setTime(Number(sessionStorage.getItem('dateCheckOut')));
  $outDate.text(`${date.getDate()}.${getMonth(date.getMonth())}.${date.getFullYear()}`);
}

function setDateSessionStorage() {
  sessionStorage.setItem('dateComeIn', String(dateComeIn));
  sessionStorage.setItem('dateCheckOut', String(dateCheckOut));
}

function setDateIn() {
  date.setTime(dateComeIn);
  $inDate.text(`${date.getDate()}.${getMonth(date.getMonth())}.${date.getFullYear()}`);
}

function setDateOut() {
  date.setTime(dateCheckOut);
  $outDate.text(`${date.getDate()}.${getMonth(date.getMonth())}.${date.getFullYear()}`);
  setDateSessionStorage();
}
function getDaysRange() {
  let range = 0;
  if(sessionStorage.getItem('dateCheckOut') !== null) {
    range = Number(sessionStorage.getItem('dateCheckOut')) - Number(sessionStorage.getItem('dateComeIn'));
    date.setTime(range);
    return (date.getDate()-1);
  }
}
function getMonth(month) {
  let monthStr = '';
  month++;
  if (month < 10) {
    monthStr = `0${month}`;
    return monthStr;
  } else return month;
}

function setDefaultDate() {
  $inDate.text(defaultDate);
  $outDate.text(defaultDate);
  sessionStorage.removeItem('dateComeIn');
  sessionStorage.removeItem('dateCheckOut');
}
getDaysRange();
export {getDaysRange};


