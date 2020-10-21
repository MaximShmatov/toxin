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
    super($dateFilter.find('.js-date-picker'));
    this.#$dateFilter = $dateFilter;

    this.#initAreas();
    this.#setHandles();
    this.#setTextBody();
    this.#$datePicker.toggleClass('date-filter__picker_hidden');
  }

  #initAreas() {
    this.#$dateHeader = this.#$dateFilter.find('.js-date-filter__body');
    this.#$dateRange = this.#$dateFilter.find('.js-date-filter__body-range');
    this.#$datePicker = this.#$dateFilter.find('.js-date-filter__picker');
  }

  #setHandles() {
    this.#$dateHeader.on('click.datefilter', this.#handleHeaderClick.bind(this));
    this.#$datePicker.on('datepicker.select.out', this.#handlePickerSelectOut.bind(this));
    this.#$datePicker.on('datepicker.submit', this.#handlePickerButtonSubmit.bind(this));
    this.#$datePicker.on('datepicker.clear', this.#handlePickerButtonClear.bind(this));

    $(document).on('mouseup.datefilter', this.#handleDocumentMouseup.bind(this));
  }

  #handleHeaderClick() {
    this.#$datePicker.toggleClass('date-filter__picker_hidden');
  }

  #handlePickerSelectOut() {
    this.#setTextBody();
  }

  #handlePickerButtonSubmit() {
    this.#$datePicker.toggleClass('date-filter__picker_hidden');
  }

  #handlePickerButtonClear() {
    this.#handlePickerSelectOut();
  }

  #handleDocumentMouseup(evt) {
    if (!evt.target.closest('.js-date-filter')) {
      this.#$datePicker.addClass('date-filter__picker_hidden');
    }
  }

  #setTextBody() {
    this.#date.setTime(Number(this.dateComeIn));
    const fromDate = `${this.#date.getDate()} ${this.#month[this.#date.getMonth()]} `;

    this.#date.setTime(Number(this.dateCheckOut));
    const toDate = `${this.#date.getDate()} ${this.#month[this.#date.getMonth()]}`;

    this.#$dateRange.text(`${fromDate} - ${toDate}`);
  }
}

export default DateFilter
