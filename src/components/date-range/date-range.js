import DatePicker from '../date-picker/date-picker';

class DateRange extends DatePicker {
  #$dateRange;

  #$datePicker;

  #$inDate;

  #$outDate;

  #defaultDate = 'дд.мм.гггг';

  #date = new Date();

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

    $(document).on('mouseup.daterange', this.#handleDocumentMouseup.bind(this));
  }

  #handleHeadInClick(event) {
    this.#togglePicker(event);
  }

  #handleHeadOutClick(event) {
    this.#togglePicker(event);
  }

  #handlePickerSelectIn() {
    const date = (this.currentDate > Number(this.dateComeIn))
      ? this.currentDate
      : Number(this.dateComeIn);
    this.dateComeIn = date.toString();
    this.#date.setTime(date);
    const dateString = `${this.#date.getDate()}.${this.#getMonth(this.#date.getMonth())}.${this.#date.getFullYear()}`;
    this.#$inDate.text(dateString);
  }

  #handlePickerSelectOut() {
    const date = (Number(this.dateComeIn) < Number(this.dateCheckOut))
      ? Number(this.dateCheckOut)
      : Number(this.dateComeIn);
    this.dateCheckOut = date.toString();
    this.#date.setTime(date);
    const dateString = `${this.#date.getDate()}.${this.#getMonth(this.#date.getMonth())}.${this.#date.getFullYear()}`;
    this.#$outDate.text(dateString);
  }

  #handlePickerSubmit(event) {
    this.#togglePicker(event);
  }

  #handlePickerClear() {
    this.#$inDate.text(this.#defaultDate);
    this.#$outDate.text(this.#defaultDate);
  }

  #handleDocumentMouseup(event) {
    if (!event.target.closest('.js-date-range')) {
      this.#$datePicker.addClass('date-range__picker_hidden');
    }
  }

  #getMonth(month) {
    let monthStr = '';
    if (month < 9) {
      monthStr = `0${month + 1}`;
      return monthStr;
    }
    return month + 1;
  }

  #togglePicker() {
    this.#$datePicker.toggleClass('date-range__picker_hidden');
  }
}

export default DateRange;
