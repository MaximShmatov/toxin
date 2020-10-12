'use strict'

import DatePicker from '../date-picker/date-picker';
import './date-range.sass';


export class DateRange extends DatePicker {
  #defaultDate = 'дд.мм.гггг';
  #date = new Date();
  #$range;
  #$picker;
  #$headInDate;
  #$headOutDate;
  #selectDateOut = true;


  constructor($dateRange) {
    super($dateRange);
    this.#$range = $dateRange.find('.date-range');
    this.#$picker = $dateRange.find('.date-range__picker');
    this.#$headInDate = $dateRange.find('.date-range__head-in-date');
    this.#$headOutDate = $dateRange.find('.date-range__head-out-date');

    $($dateRange).find('.date-range__head-in').on('click', this.#togglePicker.bind(this));
    $($dateRange).find('.date-range__head-out').on('click', this.#togglePicker.bind(this));
    $($dateRange).on('date-picker-selected-in', this.#setDateIn.bind(this));
    $($dateRange).on('date-picker-selected-out', this.#setDateOut.bind(this));
    $($dateRange).on('date-picker-clear', this.#setDefaultDate.bind(this));
    $($dateRange).on('date-picker-submit', this.#togglePicker.bind(this));

    document.addEventListener('mouseup', this.#hiddenPicker.bind(this));

    this.#togglePicker();
  }

  getDateRange() {
    const dateIn = new Date();
    const dateOut = new Date();
    this.#date.setTime(dateOut.setTime(this.dateCheckOut) - dateIn.setTime(this.dateComeIn));
    return (this.#date.getDate() - 1);
  }

  #setDateIn() {
    this.#date.setTime(this.dateComeIn);
    const str = `${this.#date.getDate()}.${this.#getMonth(this.#date.getMonth())}.${this.#date.getFullYear()}`
    this.#$headInDate.text(str);
    this.counter = 0;
  }

  #setDateOut() {
    this.#date.setTime(this.dateCheckOut);
    const str = `${this.#date.getDate()}.${this.#getMonth(this.#date.getMonth())}.${this.#date.getFullYear()}`
    this.#$headOutDate.text(str);
    this.counter = 1;
  }

  #getMonth(month) {
    let monthStr = '';
    month++;
    if (month < 10) {
      monthStr = `0${month}`;
      return monthStr;
    } else return month;
  }

  #setDefaultDate() {
    this.#$headInDate.text(this.#defaultDate);
    this.#$headOutDate.text(this.#defaultDate);

  }

  #togglePicker(evt) {
    this.#$picker.toggleClass('date-range__picker_hidden');
    if (evt) {
      if (evt.target.closest('.date-range__head-in')) {
        this.#selectDateOut = false;
        this.counter = 0;
      } else {
        this.#selectDateOut = true;
        this.counter = 1;
      }
    }
  }

  #hiddenPicker(evt) {
    if (!evt.target.closest('.date-range')) {
      this.#$picker.addClass('date-range__picker_hidden');
    }
  }
}