'use strict'

import DatePicker from '../date-picker/date-picker';
import '../button/button';
import './date-filter.sass';


export class DateFilter extends DatePicker {
  #$filter;
  #$filterDateOutput;
  #$filterDateButton;
  #month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  #date = new Date();
  #$picker;

  constructor($dateFilter) {
    super($dateFilter);
    this.#$filter = $dateFilter;
    this.#$picker = $dateFilter.find('.date-picker');
    this.#$filterDateOutput = $dateFilter.find('.date-filter__head-output');
    this.#$filterDateButton = $dateFilter.find('.date-filter__head-button');

    this.#$filterDateButton.on('click', this.#togglePicker.bind(this));
    $dateFilter.on('date-picker_selected-out', this.#setDateRange.bind(this));
    $dateFilter.on('date-picker_submit', this.#togglePicker.bind(this));

    document.addEventListener('mouseup', this.#hiddenPicker.bind(this));

    this.#setDateRange();
  }

  #setDateRange() {
    this.#date.setTime(this.dateComeIn);
    let fromDate = `${this.#date.getDate()} ${this.#month[this.#date.getMonth()]} `;
    this.#date.setTime(this.dateCheckOut);
    let toDate = `${this.#date.getDate()} ${this.#month[this.#date.getMonth()]}`;
    this.#$filterDateOutput.text(`${fromDate} - ${toDate}`);
  }
  #togglePicker() {
    this.#$picker.toggleClass('date-filter__picker_hidden');
  }

  #hiddenPicker(evt) {
    if (!evt.target.closest('.date-filter')){
      this.#$picker.addClass('date-filter__picker_hidden');
    }
  }
}



