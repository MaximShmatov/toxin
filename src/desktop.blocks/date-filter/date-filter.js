'use strict'

import '../button/button';
import {DatePicker} from "../date-picker/date-picker";
import './date-filter.sass';

export class DateFilter extends DatePicker {
  #$filter;
  #$filterDateOutput;
  #$filterDateButton;
  #month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  #date = new Date();

  constructor($dateFilter) {
    super($($dateFilter.find('.date-picker')));
    this.#$filter = $dateFilter;
    this.#$filterDateOutput = $dateFilter.find('.date-filter__head-output');
    this.#$filterDateButton = $dateFilter.find('.date-filter__head-button');
    this.#$filterDateButton.on('click', this.datePickerToggle.bind(this));
    $dateFilter.on('date-picker_selected-out', this.#setDateRange.bind(this));
    this.#setDateRange();
  }

  #setDateRange() {
    this.#date.setTime(this.dateComeIn);
    let fromDate = `${this.#date.getDate()} ${this.#month[this.#date.getMonth()]} `;
    this.#date.setTime(this.dateCheckOut);
    let toDate = `${this.#date.getDate()} ${this.#month[this.#date.getMonth()]}`;
    this.#$filterDateOutput.text(`${fromDate} - ${toDate}`);
  }
}



