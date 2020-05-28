'use strict'

import('./date-picker.sass');
import('../button/button');

export class DatePicker {
  #date;
  #currentDate = new Date();
  week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябр', 'Октябрь', 'Ноябрь', 'Декабрь'];
  #days = [];
  #day;
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
      this.#currentDate.setTime(date.getTime());
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
    document.addEventListener('mouseup', this.#hiddenPicker.bind(this));
  }

  togglePicker() {
    this.#datePicker.toggleClass('date-picker_visibility');
  }

  get selectedDate() {
    return this.#currentDate;
  }

  get date() {
    return this.#date;
  }

  get days() {
    return this.#days;
  }

  #hiddenPicker(evt) {
    if (this.#datePicker.has(evt.target).length === 0) this.#datePicker.addClass('date-picker_visibility');
  }

  #setTitle() {
    this.#title.text(`${this.month[this.#currentDate.getMonth()]} ${this.#currentDate.getFullYear()}`);
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
    this.#datePicker.trigger('date_list');
  }

  #clearPicker() {
    this.#currentDate.setTime(this.#date.getTime());
    this.#setTitle();
    this.#setDatePicker();
    this.#datePicker.trigger('date_clear');

  }

  #selectedDate(evt) {
    this.#currentDate.setTime($(evt.currentTarget).attr('data-timestamp'));
    $(evt.currentTarget).addClass('date-picker__table-date_selected');
    this.#datePicker.trigger('date_selected');
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
      if (this.#currentDate.getMonth() === currentMonth) {
        this.#days[i].addClass('date-picker__table-date_month-current');
        let isCurrentDate = this.#currentDate.getDate() === this.#date.getDate() && currentMonth === this.#date.getMonth() && currentYear === this.#date.getFullYear();
        if (isCurrentDate) {
          this.#days[i].addClass('date-picker__table-date_current');
          this.#day = this.#days[i];
        }
      } else this.#days[i].removeClass('date-picker__table-date_month-current');
      this.#days[i].attr('data-timestamp', this.#currentDate.getTime());
      this.#days[i].text(this.#currentDate.getDate());
    }
    if (currentMonth !== this.#date.getMonth()) this.#day.removeClass('date-picker__table-date_current');
    this.#currentDate.setFullYear(currentYear, currentMonth, currentDay);
  }
}
