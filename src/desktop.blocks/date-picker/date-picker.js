'use strict'

import('./date-picker.sass');
import('../button/button');

export let dateComeIn;
export let dateCheckOut;

let date = new Date();
let currentDate = new Date();
let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
let month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябр', 'Октябрь', 'Ноябрь', 'Декабрь'];
let days = [];
let day;
let counter = 0;

let $datePicker = $('.date-picker');
let $listLeft = $datePicker.find('.date-picker__header-list-left');
let $listRight = $datePicker.find('.date-picker__header-list-right');
let $title = $datePicker.find('.date-picker__header-title');
let $tableHeader = $datePicker.find('.date-picker__table-header');
let $tableDate = $datePicker.find('.date-picker__table-date');
let $clear = $datePicker.find('.date-picker__footer-clear');
let $submit = $datePicker.find('.date-picker__footer-submit');

dateComeIn = date.getTime();
dateCheckOut = date.getTime();

for (let i = 0; i < 35; i++) {
  days[i] = $($tableDate[i]);
}

for (let i = 0; i < 7; i++) {
  $($tableHeader[i]).text(week[i]);
}

for (let i = 0; i < 35; i++) days[i].on('focus', selectedDate);
$listLeft.on('click', listLeftDate);
$listRight.on('click', listRightDate);
$clear.on('click', clearPicker);
$submit.on('click', datePickerToggle);

setTitle();
setDatePicker();

export function datePickerToggle() {
  $datePicker.toggleClass('date-picker_hidden');
}

function setTitle() {
  $title.text(`${month[currentDate.getMonth()]} ${currentDate.getFullYear()}`);
}

function listLeftDate() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  setTitle(currentDate);
  setDatePicker();
}

function listRightDate() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  setTitle(currentDate);
  setDatePicker();
}

function clearPicker() {
  currentDate.setTime(date.getTime());
  setTitle();
  setDatePicker();
  $datePicker.trigger('date-picker_clear');
}

function selectedDate(evt) {
  counter++;
  let selected = $(evt.currentTarget)
  switch (counter) {
    case 1:
      dateComeIn = selected.attr('data-timestamp');
      selected.addClass('date-picker__table-date_selected-in');
      $datePicker.trigger('date-picker_selected-in');
      break;
    case 2:
      dateCheckOut = selected.attr('data-timestamp');
      selected.addClass('date-picker__table-date_selected-out');
      dateRange();
      $datePicker.trigger('date-picker_selected-out');
      break;
    case 3:
      counter = 0;
      dateComeIn = date.getTime();
      dateCheckOut = date.getTime();
      setDatePicker();
  }
}

function dateRange() {
  for (let i = 0; i < 35; i++) {
    let timeStamp = days[i].attr('data-timestamp');
    if (timeStamp >= dateComeIn && timeStamp <= dateCheckOut) days[i].addClass('date-picker__table-date_range');
  }
}

function setDatePicker() {
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();
  currentDate.setDate(1);
  let weekDay = currentDate.getDay();
  if (weekDay === 0) weekDay = 7;
  currentDate.setDate(-weekDay + 1);
  for (let i = 0; i < 35; i++) {
    currentDate.setDate(currentDate.getDate() + 1);
    if (currentDate.getMonth() === currentMonth) {
      days[i].addClass('date-picker__table-date_month-current');
      if (currentDate.getTime() === date.getTime()) {
        days[i].addClass('date-picker__table-date_current');
        day = days[i];
      }
    } else days[i].removeClass('date-picker__table-date_month-current');
    days[i].attr('data-timestamp', currentDate.getTime());
    days[i].text(currentDate.getDate());
    days[i].removeClass('date-picker__table-date_selected-in');
    days[i].removeClass('date-picker__table-date_selected-out');
    days[i].removeClass('date-picker__table-date_range');
  }
  if (currentMonth !== date.getMonth()) day.removeClass('date-picker__table-date_current');
  currentDate.setFullYear(currentYear, currentMonth, currentDay);
}