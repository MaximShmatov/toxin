'use strict'

import '../button/button';
import './date-picker.sass';


class DatePicker {
  #$picker;
  #$title;
  #$bodyDates;
  #$bodyRanges;

  #evtClear = 'date-picker-clear';
  #evtSubmit = 'date-picker-submit';
  #evtSelectIn = 'date-picker-select-in';
  #evtSelectOut = 'date-picker-select-out';
  #pickerDate = new Date();
  #monthYear = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябр', 'Октябрь', 'Ноябрь', 'Декабрь'];
  #dateComeInBefore;
  #dateCheckOutBefore;
  #currentDate = this.#pickerDate.getTime();
  dateComeIn;
  dateCheckOut;
  counter = 0;


  constructor($picker) {
    this.#$picker = $picker;
    this.#$title = $picker.find('.date-picker__header-title');
    this.#$bodyRanges = $picker.find('.date-picker__body-range');

    this.#$bodyDates = $picker.find('.date-picker__body-date').on('click', this.#selectDate.bind(this));
    $picker.find('.date-picker__header-list-left').on('click', this.#listLeftDate.bind(this));
    $picker.find('.date-picker__header-list-right').on('click', this.#listRightDate.bind(this));
    $picker.find('.date-picker__footer-clear').on('click', this.#clear.bind(this));
    $picker.find('.date-picker__footer-submit').on('click', this.#submit.bind(this));

    this.#setPickerDate();
  }

  #submit() {
    this.#$picker.trigger(this.#evtSubmit);
  }

  #clear() {
    this.counter = 0;
    this.#pickerDate.setTime(this.#currentDate);
    this.dateComeIn = undefined;
    this.dateCheckOut = undefined;
    this.#setTitle();
    this.#setPickerDate();
    this.#setRangeDate();
    this.#$picker.trigger(this.#evtClear);
  }

  #setTitle() {
    this.#$title.text(`${this.#monthYear[this.#pickerDate.getMonth()]} ${this.#pickerDate.getFullYear()}`);
  }

  #listLeftDate() {
    this.#pickerDate.setMonth(this.#pickerDate.getMonth() - 1);
    this.#setPickerDate();
  }

  #listRightDate() {
    this.#pickerDate.setMonth(this.#pickerDate.getMonth() + 1);
    this.#setPickerDate();
  }

  #selectDate(evt) {
    this.counter++;
    switch (this.counter) {
      case 1:
        this.#dateComeInBefore = this.dateComeIn;
        this.dateComeIn = evt.currentTarget.getAttribute('data-timestamp');
        this.#setRangeDate();
        this.#$picker.trigger(this.#evtSelectIn);
        break;
      case 2:
        this.#dateCheckOutBefore = this.dateCheckOut;
        this.dateCheckOut = evt.currentTarget.getAttribute('data-timestamp');
        this.#setRangeDate();
        this.#$picker.trigger(this.#evtSelectOut);
        this.counter = 0;
    }
  }

  #setRangeDate() {
    this.#$bodyDates.each((index, date) => {
      const timeStamp = date.getAttribute('data-timestamp');

      this.#$bodyRanges[index].removeAttribute('data-range-first');
      this.#$bodyRanges[index].removeAttribute('data-range-last');

      if (timeStamp >= this.dateComeIn && timeStamp <= this.dateCheckOut) {
        this.#$bodyRanges[index].classList.add('date-picker__body-range');
      } else {
        this.#$bodyRanges[index].classList.remove('date-picker__body-range');
      }

      if (timeStamp === this.dateComeIn || timeStamp === this.dateCheckOut) {
        date.classList.add('date-picker__body-date_selected');
        if (timeStamp === this.dateComeIn) {
          this.#$bodyRanges[index].setAttribute('data-range', 'first');
        } else {
          this.#$bodyRanges[index].setAttribute('data-range', 'last');
        }
      } else {
        date.classList.remove('date-picker__body-date_selected');
        this.#$bodyRanges[index].removeAttribute('data-range');
      }

      if (timeStamp === String(this.#currentDate)) {
        date.classList.add('date-picker__body-date_current');
      } else {
        date.classList.remove('date-picker__body-date_current');
      }
    });
  }

  #setPickerDate() {
    const dateCurrent = new Date(this.#pickerDate);
    const month = dateCurrent.getMonth();
    dateCurrent.setDate(1);
    let weekDay = dateCurrent.getDay();
    if (weekDay === 0) weekDay = 7;
    dateCurrent.setDate(-weekDay + 1);

    this.#$bodyDates.each((index, date) => {
      dateCurrent.setDate(dateCurrent.getDate() + 1);
      if (dateCurrent.getMonth() === month) {
        date.classList.add('date-picker__body-date_day-month');
      } else {
        date.classList.remove('date-picker__body-date_day-month');
      }
      date.setAttribute('data-timestamp', dateCurrent.getTime());
      date.value = dateCurrent.getDate();
    });
    this.#setTitle();
    this.#setRangeDate();
  }
}

export default DatePicker;