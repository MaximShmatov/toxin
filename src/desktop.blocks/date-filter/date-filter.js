'use strict'

import('../button/button');
import {dateComeIn, dateCheckOut, datePickerToggle} from "../date-picker/date-picker";

import('./date-filter.sass');

let $filterDate = $('.filter__date');
let $filterDateOutput = $filterDate.find('.filter__date-head-output');
let $filterDateButton = $filterDate.find('.filter__date-head-button');

let month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
let date = new Date();

date.setTime(Number(sessionStorage.getItem('dateComeIn')));
let fromDate = `${date.getDate()} ${month[date.getMonth()]} `;
date.setTime(Number(sessionStorage.getItem('dateCheckOut')));
let toDate = `${date.getDate()} ${month[date.getMonth()]}`;
$filterDateOutput.text(`${fromDate} - ${toDate}`);

function setDateRange() {
  date.setTime(dateComeIn);
  let fromDate = `${date.getDate()} ${month[date.getMonth()]} `;
  date.setTime(dateCheckOut);
  let toDate = `${date.getDate()} ${month[date.getMonth()]}`;
  $filterDateOutput.text(`${fromDate} - ${toDate}`);
  datePickerToggle();
}

$filterDateButton.on('click', datePickerToggle);
$filterDate.on('date-picker_selected-out', setDateRange)