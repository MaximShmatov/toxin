import DatePicker from '../date-picker/date-picker';

class DateFilter extends DatePicker {
  #$dateFilter;

  #$dateRange;

  #$datePicker;

  #$dateHeader;

  #month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

  #date = new Date();

  constructor($dateFilter) {
    super($dateFilter);
    this.#init($dateFilter);
    this.#setHandles();
  }

  #init($dateFilter) {
    this.#$dateFilter = $dateFilter.find('.js-date-filter');
    this.#$dateHeader = $dateFilter.find('.js-date-filter__body');
    this.#$dateRange = $dateFilter.find('.js-date-filter__body-range');
    this.#$datePicker = $dateFilter.find('.js-date-filter__picker');
    this.#$datePicker.toggleClass('date-filter__picker_hidden');
    this.#setTextBody();
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

  #handleDocumentMouseup(event) {
    if (!event.target.closest('.js-date-filter')) {
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

export default DateFilter;
