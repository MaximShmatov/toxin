'use strict'

import './date-picker.sass';
import '../button/button';

export class DatePicker {
  #date = new Date();
  #currentDate = new Date();
  dateComeIn = this.#date.getTime();
  dateCheckOut = this.#date.getTime();
  #week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  #month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябр', 'Октябрь', 'Ноябрь', 'Декабрь'];
  #days = [];
  #day;
  #counter = 0;
  #$datePicker;
  #$title;
  #$tableHeader;
  #$tableDate;

  constructor($picker) {
    this.#$datePicker = $picker;
    this.#$title = $picker.find('.date-picker__header-title');
    this.#$tableHeader = $picker.find('.date-picker__table-header');
    this.#$tableDate = $picker.find('.date-picker__table-date');

    for (let i = 0; i < 35; i++) {
      this.#days[i] = $(this.#$tableDate[i]);
    }

    for (let i = 0; i < 7; i++) {
      $(this.#$tableHeader[i]).text(this.#week[i]);
    }

    for (let i = 0; i < 35; i++) this.#days[i].on('focus', this.#selectedDate.bind(this));
    $picker.find('.date-picker__header-list-left').on('click', this.#listLeftDate.bind(this));
    $picker.find('.date-picker__header-list-right').on('click', this.#listRightDate.bind(this));
    $picker.find('.date-picker__footer-clear').on('click', this.#clearPicker.bind(this));
    $picker.find('.date-picker__footer-submit').on('click', this.#submitPicker.bind(this));

    this.#setTitle();
    this.#setDatePicker();
  }

  #submitPicker() {
    this.#$datePicker.trigger('date-picker_submit');
  }

  datePickerToggle() {
    this.#$datePicker.toggleClass('date-picker_visible');
  }

  #setTitle() {
    this.#$title.text(`${this.#month[this.#currentDate.getMonth()]} ${this.#currentDate.getFullYear()}`);
  }

  #listLeftDate() {
    this.#currentDate.setMonth(this.#currentDate.getMonth() - 1);
    this.#setTitle(this.#currentDate);
    this.#setDatePicker();
  }

  #listRightDate() {
    this.#currentDate.setMonth(this.#currentDate.getMonth() + 1);
    this.#setTitle(this.#currentDate);
    this.#setDatePicker();
  }

  #clearPicker() {
    this.#currentDate.setTime(this.#date.getTime());
    this.#setTitle();
    this.#setDatePicker();
    this.#$datePicker.trigger('date-picker_clear');
  }

  #selectedDate(evt) {
    this.#counter++;
    let selected = $(evt.currentTarget)
    switch (this.#counter) {
      case 1:
        this.dateComeIn = this.#date.getTime();
        this.dateCheckOut = this.#date.getTime();
        this.#setDatePicker();
        this.dateComeIn = selected.attr('data-timestamp');
        selected.addClass('date-picker__table-date_selected-in');
        this.#$datePicker.trigger('date-picker_selected-in');
        break;
      case 2:
        this.dateCheckOut = selected.attr('data-timestamp');
        selected.addClass('date-picker__table-date_selected-out');
        this.#dateRange();
        this.#$datePicker.trigger('date-picker_selected-out');
        this.#counter = 0;
    }
  }

  #dateRange() {
    for (let i = 0; i < 35; i++) {
      let timeStamp = this.#days[i].attr('data-timestamp');
      if (timeStamp >= this.dateComeIn && timeStamp <= this.dateCheckOut) this.#days[i].addClass('date-picker__table-date_range');
    }
  }

  #setDatePicker() {
    let currentYear = this.#currentDate.getFullYear();
    let currentMonth = this.#currentDate.getMonth();
    let currentDay = this.#currentDate.getDate();
    this.#currentDate.setDate(1);
    let weekDay = this.#currentDate.getDay();
    if (weekDay === 0) weekDay = 7;
    this.#currentDate.setDate(-weekDay + 1);
    for (let i = 0; i < 35; i++) {
      this.#currentDate.setDate(this.#currentDate.getDate() + 1);
      if (this.#currentDate.getMonth() === currentMonth) {
        this.#days[i].addClass('date-picker__table-date_month-current');
        if (this.#currentDate.getTime() === this.#date.getTime()) {
          this.#days[i].addClass('date-picker__table-date_current');
          this.#day = this.#days[i];
        }
      } else this.#days[i].removeClass('date-picker__table-date_month-current');
      this.#days[i].attr('data-timestamp', this.#currentDate.getTime());
      this.#days[i].text(this.#currentDate.getDate());
      this.#days[i].removeClass('date-picker__table-date_selected-in');
      this.#days[i].removeClass('date-picker__table-date_selected-out');
      this.#days[i].removeClass('date-picker__table-date_range');
    }
    if (currentMonth !== this.#date.getMonth()) this.#day.removeClass('date-picker__table-date_current');
    this.#currentDate.setFullYear(currentYear, currentMonth, currentDay);
  }
}