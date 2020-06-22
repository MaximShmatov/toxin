'use strict'

import {DatePicker} from '../date-picker/date-picker';
import './date-range.sass';


export class DateRange extends DatePicker {
  #defaultDate = 'дд.мм.гггг';
  #date = new Date();
  #$range;

  constructor($dateRange) {
    super($dateRange.find('.date-picker'));
    this.#$range = $dateRange;
    $($dateRange).find('.date-range__head-in-button').on('click', this.datePickerToggle.bind(this));
    $($dateRange).find('.date-range__head-out-button').on('click', this.datePickerToggle.bind(this));
    $($dateRange).on('date-picker_selected-in', this.#setDateIn.bind(this));
    $($dateRange).on('date-picker_selected-out', this.#setDateOut.bind(this));
    $($dateRange).on('date-picker_clear', this.#setDefaultDate.bind(this));
    $($dateRange).on('date-picker_submit', this.datePickerToggle.bind(this));
  }

  #setDateIn() {
    this.#date.setTime(this.dateComeIn);
    this.#$range.find('.date-range__head-in-date').text(`${this.#date.getDate()}.${this.#getMonth(this.#date.getMonth())}.${this.#date.getFullYear()}`);
  }

  #setDateOut() {
    this.#date.setTime(this.dateCheckOut);
    this.#$range.find('.date-range__head-out-date').text(`${this.#date.getDate()}.${this.#getMonth(this.#date.getMonth())}.${this.#date.getFullYear()}`);
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
    this.#$range.find('.date-range__head-in-date').text(this.#defaultDate);
    this.#$range.find('.date-range__head-out-date').text(this.#defaultDate);

  }
}