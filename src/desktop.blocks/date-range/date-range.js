'use strict'

import {DatePicker} from '../date-picker/date-picker';

import('./date-range.sass');
import('../button/button');

class DateRange extends DatePicker {
  #dateRange = $('.date-range');
  #input = this.#dateRange.find('.date-range__date-dropdown-input');
  #output = this.#dateRange.find('.date-range__date-dropdown-output');
  #dropdownIn = this.#dateRange.find('.date-range__date-dropdown-in');
  #dropdownOut = this.#dateRange.find('.date-range__date-dropdown-out');
  #defaultDate = 'дд.мм.гггг';
  dateIn = new Date();
  dateOut = new Date();
  #currentPicker;

  constructor(date) {
    super(date);
    this.togglePicker();
    this.#input.val(this.#defaultDate);
    this.#output.val(this.#defaultDate);
    this.#dateRange.on('date_selected', this.#setDate.bind(this));
    this.#dateRange.on('date_clear', this.#clearDate.bind(this));
    this.#dateRange.on('date_list', this.#listDate.bind(this));
    this.#dropdownIn.on('click', this.#setDateIn.bind(this));
    this.#dropdownOut.on('click', this.#setDateOut.bind(this));

  }
  #setDateIn() {
    this.togglePicker();
    this.#currentPicker = 'in';
  }
  #setDateOut() {
    this.togglePicker();
    this.#currentPicker = 'out';
  }
  #clearDate() {
    this.#input.val(this.#defaultDate);
    this.#output.val(this.#defaultDate);
    this.dateIn.setTime(this.date.getTime());
    this.dateOut.setTime(this.date.getTime());
    this.#setDateRange(this.dateIn, this.dateOut);
  }
  #listDate() {
    this.#setDateRange();
  }
  #setDate() {
    let date = `${this.selectedDate.getDate()}.${this.selectedDate.getMonth()}.${this.selectedDate.getFullYear()}`;

    if (this.#currentPicker === 'in') {
      this.#input.val(date);
      this.dateIn.setTime(this.selectedDate.getTime());
    }

    if (this.#currentPicker === 'out') {
      this.#output.val(date);
      this.dateOut.setTime(this.selectedDate.getTime());
    }
    this.#setDateRange(this.dateIn, this.dateOut);
  }

  #setDateRange() {
    let tableDate = $('.date-picker__table td');
    let date = new Date();
    for (let i = 0; i < 35; i++) {
      $(tableDate[i]).removeClass('date-range__date-picker_range');
      $(tableDate[i]).removeClass('date-range__date-picker_range-first');
      $(tableDate[i]).removeClass('date-range__date-picker_range-last');
      date.setTime(Number(this.days[i].attr('data-timestamp')));
      if (date >= this.dateIn && date <= this.dateOut) {
        $(tableDate[i]).addClass('date-range__date-picker_range');
      }
    }
    tableDate.filter('.date-range__date-picker_range:first').addClass('date-range__date-picker_range-first')
      //.removeClass('date-range__date-picker_range');
    tableDate.filter('.date-range__date-picker_range:last').addClass('date-range__date-picker_range-last')
     // .removeClass('date-range__date-picker_range');

  }
}

$.fn.dateRange = new DateRange(new Date());