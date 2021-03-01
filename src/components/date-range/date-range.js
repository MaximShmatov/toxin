import DatePicker from '../date-picker/date-picker';

class DateRange extends DatePicker {
  #$dateRange;

  #$datePicker;

  #$inDate;

  #$outDate;

  #defaultDate = 'дд.мм.гггг';

  #date = new Date();

  #isOutDate = false;

  constructor($component) {
    super($component);
    this.#init($component);
    this.#setHandles();
  }

  getDateRange() {
    this.#date.setTime(Number(this.dateCheckOut) - Number(this.dateComeIn));
    return (this.#date.getDate() - 1);
  }

  #init($component) {
    this.#$dateRange = $component.find('.js-date-range');
    this.#$datePicker = $component.find('.js-date-range__picker');
    this.#$inDate = $component.find('.js-date-range__head-in-date');
    this.#$outDate = $component.find('.js-date-range__head-out-date');
    this.#togglePicker();
  }

  #setHandles() {
    this.#$dateRange.find('.js-date-range__head-in').on('click.daterange', this.#handleHeadInClick.bind(this));
    this.#$dateRange.find('.js-date-range__head-out').on('click.daterange', this.#handleHeadOutClick.bind(this));
    this.#$dateRange.on('datepicker.select.in', this.#handlePickerSelectIn.bind(this));
    this.#$dateRange.on('datepicker.select.out', this.#handlePickerSelectOut.bind(this));
    this.#$dateRange.on('datepicker.clear', this.#handlePickerClear.bind(this));
    this.#$dateRange.on('datepicker.submit', this.#handlePickerSubmit.bind(this));

    window.$(document).on('mouseup.daterange', this.#handleDocumentMouseup.bind(this));
  }

  #handleHeadInClick(evt) {
    this.#togglePicker(evt);
  }

  #handleHeadOutClick(evt) {
    this.#togglePicker(evt);
  }

  #handlePickerSelectIn() {
    this.counter = 0;
    this.#date.setTime(Number(this.dateComeIn));
    const dateString = `${this.#date.getDate()}.${DateRange.#getMonth(this.#date.getMonth())}.${this.#date.getFullYear()}`;
    this.#$inDate.text(dateString);
  }

  #handlePickerSelectOut() {
    this.counter = 1;
    this.#date.setTime(Number(this.dateCheckOut));
    const str = `${this.#date.getDate()}.${DateRange.#getMonth(this.#date.getMonth())}.${this.#date.getFullYear()}`;
    this.#$outDate.text(str);
  }

  #handlePickerSubmit(evt) {
    this.#togglePicker(evt);
  }

  #handlePickerClear() {
    this.#$inDate.text(this.#defaultDate);
    this.#$outDate.text(this.#defaultDate);
  }

  #handleDocumentMouseup(evt) {
    if (!evt.target.closest('.js-date-range')) {
      this.#$datePicker.addClass('date-range__picker_hidden');
    }
  }

  static #getMonth(month) {
    let monthStr = '';
    if (month < 9) {
      monthStr = `0${month + 1}`;
      return monthStr;
    }
    return month + 1;
  }

  #togglePicker(evt) {
    if (evt) {
      if (evt.target.closest('.js-date-range__head-in')) {
        const hidden = !this.#isOutDate || this.#$datePicker.hasClass('date-range__picker_hidden');
        if (hidden) {
          this.#$datePicker.toggleClass('date-range__picker_hidden');
        }
        this.#isOutDate = false;
        this.counter = 0;
        return;
      }
      if (evt.target.closest('.js-date-range__head-out')) {
        const hidden = this.#isOutDate || this.#$datePicker.hasClass('date-range__picker_hidden');
        if (hidden) {
          this.#$datePicker.toggleClass('date-range__picker_hidden');
        }
        this.#isOutDate = true;
        this.counter = 1;
        return;
      }
    }
    this.#$datePicker.toggleClass('date-range__picker_hidden');
  }
}

export default DateRange;
