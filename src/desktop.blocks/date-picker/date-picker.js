'use strict'

import('./date-picker.sass');
import('../button/button');

class DatePicker {
  date;
  currentDate = new Date();
  week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябр', 'Октябрь', 'Ноябрь', 'Декабрь'];
  days = [];

  datePicker = $('.date-picker');
  listLeft = this.datePicker.find('.date-picker__list-left');
  listRight = this.datePicker.find('.date-picker__list-right');
  title = this.datePicker.find('.date-picker__title');
  tableHeader = this.datePicker.find('.date-picker__table-header');
  tableDate = this.datePicker.find('.date-picker__table-date');
  clear = this.datePicker.find('.date-picker__clear');
  submit = this.datePicker.find('.date-picker__submit');

  constructor(date) {
    this.date = date;
    this.currentDate.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());

    for (let i = 0; i < 35; i++) {
      this.days[i] = $(this.tableDate[i]);
    }

    for (let i = 0; i < 7; i++) {
      $(this.tableHeader[i]).text(this.week[i]);
    }

    for (let i = 0; i < 35; i++) {
      this.days[i].on('focus', this.selectedDate.bind(this));
      this.days[i].on('blur', this.unselectedDate.bind(this));
    }
    this.listLeft.on('click', this.listLeftDate.bind(this));
    this.listRight.on('click', this.listRightDate.bind(this));
    this.clear.on('click', this.clearPicker.bind(this));
    this.submit.on('click', this.togglePicker.bind(this));

    this.setTitle();
    this.setDatePicker();
    this.focusCurrentDate();
  }

  focusCurrentDate() {
    if (this.date.getMonth() === this.currentDate.getMonth()) {
      $(this.days[this.date.getDate()]).addClass('date-picker__table-date_current');
    } else $(this.days[this.date.getDate()]).removeClass('date-picker__table-date_current');
  }

  setTitle() {
    this.title.text(`${this.month[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`);
  }

  listLeftDate() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.setTitle(this.currentDate);
    this.setDatePicker();
    this.focusCurrentDate();
  }

  listRightDate() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.setTitle(this.currentDate);
    this.setDatePicker();
    this.focusCurrentDate();
  }

  clearPicker() {
    this.currentDate.setFullYear(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
    this.setTitle();
    this.setDatePicker();
    this.focusCurrentDate();
  }

  togglePicker() {
    this.datePicker.toggleClass('date-picker_visibility');
  }

  selectedDate(evt) {
    this.currentDate.setDate(Number($(evt.currentTarget).text()));
    $(evt.currentTarget).addClass('date-picker__table-date_selected');
  }

  unselectedDate(evt) {
    $(evt.currentTarget).removeClass('date-picker__table-date_selected');
  }

  setDatePicker() {
    this.currentDate.setFullYear(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1);
    this.currentDate.setDate(33);
    let daysInBeforeMonth = 33 - this.currentDate.getDate();
    this.currentDate.setDate(1);
    let dayOfWeek = this.currentDate.getDay();
    (dayOfWeek === 0) ? dayOfWeek = 6 : --dayOfWeek;
    this.currentDate.setDate(33);
    let daysInCurrentMonth = 33 - this.currentDate.getDate();
    let startDateBeforeMonth = daysInBeforeMonth - dayOfWeek;
    startDateBeforeMonth++;
    let daysInAfterMonth = 35 - dayOfWeek - daysInCurrentMonth;

    this.currentDate.setMonth(this.currentDate.getMonth() - 1);

    for (let i = 0; i < dayOfWeek; i++) {
      this.days[i].text(startDateBeforeMonth + i);
      this.days[i].addClass('date-picker__table-date_month-other');
    }

    for (let i = 0; i < daysInCurrentMonth; i++) {
      if ((dayOfWeek + i) < 35) {
        this.days[dayOfWeek + i].text(i + 1);
        this.days[dayOfWeek + i].addClass('date-picker__table-date_month-current');
      }
    }

    for (let i = 0; i < daysInAfterMonth; i++) {
      this.days[dayOfWeek + daysInCurrentMonth + i].text(i + 1);
      this.days[dayOfWeek + daysInCurrentMonth + i].addClass('date-picker__table-date_month-other');
    }

  }
}

$.fn.datePicker = new DatePicker(new Date());

//$().datePicker = new DatePicker(new Date());
/*
;(function ($) {
  $.fn.datePicker = function (date) {
    let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    let month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябр', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let selectedDay = date.getDate();
    let colorDate = '';

    let datePicker = $('.date-picker');
    let listLeft = datePicker.find('.date-picker__list-left');
    let listRight = datePicker.find('.date-picker__list-right');
    let title = datePicker.find('.date-picker__title');
    let tableHeader = datePicker.find('.date-picker__table-header');
    let tableDate = datePicker.find('.date-picker__table-date');
    let clear = datePicker.find('.date-picker__clear');
    let submit = datePicker.find('.date-picker__submit');

    let days = [];
    for (let i = 0; i < 35; i++) {
      days[i] = $(tableDate[i]);
    }

    let currentDate = new Date();

    for (let i = 0; i < 7; i++) {
      $(tableHeader[i]).text(week[i]);
    }

    function setTitle(date) {
      title.text(`${month[date.getMonth()]} ${date.getFullYear()}`);
    }

    function listLeftDate() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      setDatePicker();
      setTitle(currentDate);
    }

    function listRightDate() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      setDatePicker();
      setTitle(currentDate);
    }

    function clearPicker() {
      currentDate.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
      setDatePicker();
      setTitle(currentDate);
    }

    function submitPicker() {
      datePicker.css('display', 'none');
    }

    function selectedDate(evt) {
      selectedDay = $(evt.currentTarget).text();
      colorDate = $(evt.currentTarget).css('color');
      $(evt.currentTarget).css('color', 'white');
    }

    function unselectedDate(evt) {
      $(evt.currentTarget).css('color', colorDate);
    }

    function setDatePicker() {
      currentDate.setFullYear(currentDate.getFullYear(), currentDate.getMonth() - 1);
      currentDate.setDate(33);
      let daysInBeforeMonth = 33 - currentDate.getDate();
      currentDate.setDate(1);
      let dayOfWeek = currentDate.getDay();
      (dayOfWeek === 0) ? dayOfWeek = 6 : --dayOfWeek;
      currentDate.setDate(33);
      let daysInCurrentMonth = 33 - currentDate.getDate();
      let startDateBeforeMonth = daysInBeforeMonth - dayOfWeek;
      startDateBeforeMonth++;
      let daysInAfterMonth = 35 - dayOfWeek - daysInCurrentMonth;

      currentDate.setMonth(currentDate.getMonth() - 1);

      for (let i = 0; i < dayOfWeek; i++) {
        days[i].text(startDateBeforeMonth + i);
        days[i].css('color', 'rgba(31, 32, 65, 0.25)');
      }

      for (let i = 0; i < daysInCurrentMonth; i++) {
        if ((dayOfWeek + i) < 35) {
          days[dayOfWeek + i].text(i + 1);
          days[dayOfWeek + i].css('color', 'rgba(31, 32, 65, 0.5)');
        }
      }

      for (let i = 0; i < daysInAfterMonth; i++) {
        days[dayOfWeek + daysInCurrentMonth + i].text(i + 1);
        days[dayOfWeek + daysInCurrentMonth + i].css('color', 'rgba(31, 32, 65, 0.25)');
      }

    }

    for (let i = 0; i < 35; i++) {
      days[i].on('focus', selectedDate);
      days[i].on('blur', unselectedDate);
    }
    listLeft.on('click', listLeftDate);
    listRight.on('click', listRightDate);
    clear.on('click', clearPicker);
    submit.on('click', submitPicker);

    setDatePicker();
    setTitle(currentDate);

    return this;

  }
})($);
*/
