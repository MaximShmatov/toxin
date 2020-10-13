'use strict'

import DatePicker from '../date-picker/date-picker';
import './date-range.sass';


class DateRange extends DatePicker {
  #$dateRange;
  #$datePicker;
  #$inDate;
  #$outDate;
  #defaultDate = 'дд.мм.гггг';
  #date = new Date();

  // "true" - selected in date, "false" - selected out date
  #selectedDate = true;


  constructor($dateRange) {
    super($dateRange.find('.date-picker'));
    this.#$dateRange = $dateRange;
    this.#$datePicker = $dateRange.find('.date-range__picker');
    this.#$inDate = $dateRange.find('.date-range__head-in-date');
    this.#$outDate = $dateRange.find('.date-range__head-out-date');

    $dateRange.find('.date-range__head-in').on('click', this.#togglePicker.bind(this));
    $dateRange.find('.date-range__head-out').on('click', this.#togglePicker.bind(this));
    $dateRange.on('date-picker-select-in', this.#setInDate.bind(this));
    $dateRange.on('date-picker-select-out', this.#setOutDate.bind(this));
    $dateRange.on('date-picker-clear', this.#setDefaultDate.bind(this));
    $dateRange.on('date-picker-submit', this.#togglePicker.bind(this));

    document.addEventListener('mouseup', this.#hiddenPicker.bind(this));

    this.#togglePicker();
  }

  getDateRange() {
    this.#date.setTime(Number(this.dateCheckOut) - Number(this.dateComeIn));
    return (this.#date.getDate() - 1);
  }

  #setInDate() {
    this.counter = 0;
    this.#date.setTime(Number(this.dateComeIn));
    const str = `${this.#date.getDate()}.${this.#getMonth(this.#date.getMonth())}.${this.#date.getFullYear()}`
    this.#$inDate.text(str);
  }

  #setOutDate() {
    this.counter = 1;
    this.#date.setTime(Number(this.dateCheckOut));
    const str = `${this.#date.getDate()}.${this.#getMonth(this.#date.getMonth())}.${this.#date.getFullYear()}`
    this.#$outDate.text(str);
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
    this.#$inDate.text(this.#defaultDate);
    this.#$outDate.text(this.#defaultDate);
  }

  #togglePicker(evt) {
    if (evt) {
      if (evt.target.closest('.date-range__head-in')) {
        if (!this.#selectedDate || this.#$datePicker.hasClass('date-range__picker_hidden')) {
          this.#$datePicker.toggleClass('date-range__picker_hidden');
        }
        this.#selectedDate = false;
        this.counter = 0
        return;
      }
      if (evt.target.closest('.date-range__head-out'))  {
        if (this.#selectedDate || this.#$datePicker.hasClass('date-range__picker_hidden')) {
          this.#$datePicker.toggleClass('date-range__picker_hidden');
        }
        this.#selectedDate = true;
        this.counter = 1
        return;
      }
    }
    this.#$datePicker.toggleClass('date-range__picker_hidden');
  }

  #hiddenPicker(evt) {
    if (!evt.target.closest('.date-range')) {
      this.#$datePicker.addClass('date-range__picker_hidden');
    }
  }
}

export default DateRange;