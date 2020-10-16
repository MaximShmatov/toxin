'use strict'

import DatePicker from '../date-picker/date-picker';
import '../button/button';
import './date-filter.sass';


class DateFilter extends DatePicker {
  #$dateFilter;
  #$dateRange;
  #$datePicker;
  #$dateHeader;
  #month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  #date = new Date();


  constructor($dateFilter) {
    super($dateFilter.find('.date-picker'));
    this.#$dateFilter = $dateFilter;
    this.#$dateHeader = $dateFilter.find('.date-filter__body');
    this.#$dateRange = $dateFilter.find('.date-filter__body-range');
    this.#$datePicker = $dateFilter.find('.date-filter__picker');

    this.#$dateHeader.on('click', this.#togglePicker.bind(this));
    this.#$datePicker.on('date-picker-select-out', this.#setDateRange.bind(this));
    this.#$datePicker.on('date-picker-submit', this.#togglePicker.bind(this));

    document.addEventListener('mouseup', this.#hiddenPicker.bind(this));

    this.#togglePicker();
    this.#setDateRange();
  }

  #setDateRange() {
    this.#date.setTime(Number(this.dateComeIn));
    let fromDate = `${this.#date.getDate()} ${this.#month[this.#date.getMonth()]} `;
    this.#date.setTime(Number(this.dateCheckOut));
    let toDate = `${this.#date.getDate()} ${this.#month[this.#date.getMonth()]}`;
    this.#$dateRange.text(`${fromDate} - ${toDate}`);
  }
  #togglePicker() {
    this.#$datePicker.toggleClass('date-filter__picker_hidden');
  }

  #hiddenPicker(evt) {
    if (!evt.target.closest('.date-filter')){
      this.#$datePicker.addClass('date-filter__picker_hidden');
    }
  }
}

export default DateFilter
