'use strict'

import('./date-picker.sass');
import('../button/button');

export class DatePicker {
  #date;
  #currentDate = new Date();
  week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябр', 'Октябрь', 'Ноябрь', 'Декабрь'];
  #days = [];
  #currentDay;

  #datePicker = $('.date-picker');
  #listLeft = this.#datePicker.find('.date-picker__list-left');
  #listRight = this.#datePicker.find('.date-picker__list-right');
  #title = this.#datePicker.find('.date-picker__title');
  #tableHeader = this.#datePicker.find('.date-picker__table-header');
  #tableDate = this.#datePicker.find('.date-picker__table-date');
  #clear = this.#datePicker.find('.date-picker__clear');
  #submit = this.#datePicker.find('.date-picker__submit');

  constructor(date) {
    if (date) {
      this.#date = date;
      this.#currentDate.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    } else this.#date = new Date();

    for (let i = 0; i < 35; i++) {
      this.#days[i] = $(this.#tableDate[i]);
    }

    for (let i = 0; i < 7; i++) {
      $(this.#tableHeader[i]).text(this.week[i]);
    }

    for (let i = 0; i < 35; i++) {
      this.#days[i].on('focus', this.#selectedDate.bind(this));
      this.#days[i].on('blur', this.#unselectedDate.bind(this));
    }
    this.#listLeft.on('click', this.#listLeftDate.bind(this));
    this.#listRight.on('click', this.#listRightDate.bind(this));
    this.#clear.on('click', this.#clearPicker.bind(this));
    this.#submit.on('click', this.togglePicker.bind(this));

    this.#setTitle();
    this.#setDatePicker();
    this.#currentDay = this.#datePicker.find(`button:contains(${this.#date.getDate()})`);
    this.#focusCurrentDate();
  }

  togglePicker() {
    this.#datePicker.toggleClass('date-picker_visibility');
  }
  get selectedDate () {
    return this.#currentDate;
  }

  #focusCurrentDate() {
    if (this.#date.getMonth() === this.#currentDate.getMonth()) this.#currentDay.addClass('date-picker__table-date_current');
    else this.#currentDay.removeClass('date-picker__table-date_current');
  }

  #setTitle() {
    this.#title.text(`${this.month[this.#currentDate.getMonth()]} ${this.#currentDate.getFullYear()}`);
  }

  #listLeftDate() {
    this.#currentDate.setMonth(this.#currentDate.getMonth() - 1);
    this.#setTitle(this.#currentDate);
    this.#setDatePicker();
    this.#focusCurrentDate();
  }

  #listRightDate() {
    this.#currentDate.setMonth(this.#currentDate.getMonth() + 1);
    this.#setTitle(this.#currentDate);
    this.#setDatePicker();
    this.#focusCurrentDate();
  }

  #clearPicker() {
    this.#currentDate.setFullYear(this.#date.getFullYear(), this.#date.getMonth(), this.#date.getDate());
    this.#setTitle();
    this.#setDatePicker();
    this.#focusCurrentDate();
  }

  #selectedDate(evt) {
    this.#currentDate.setDate(Number($(evt.currentTarget).text()));
    this.#currentDate.setMonth(Number($(evt.currentTarget).attr('data-month')));
    this.#currentDate.setFullYear(Number($(evt.currentTarget).attr('data-year')));
    $(evt.currentTarget).addClass('date-picker__table-date_selected');
  }

  #unselectedDate(evt) {
    $(evt.currentTarget).removeClass('date-picker__table-date_selected');
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
      if (this.#currentDate.getMonth() === currentMonth) this.#days[i].addClass('date-picker__table-date_month-current');
      else this.#days[i].removeClass('date-picker__table-date_month-current');
      this.#days[i].attr('data-year', this.#currentDate.getFullYear());
      this.#days[i].attr('data-month', this.#currentDate.getMonth());
      this.#days[i].text(this.#currentDate.getDate());
    }
    this.#currentDate.setFullYear(currentYear, currentMonth, currentDay);
  }
}

$.fn.datePicker = new DatePicker();
