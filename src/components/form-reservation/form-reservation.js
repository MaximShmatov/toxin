import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';

class FormReserve {
  #$formReserve;

  #formData;

  #dateRange;

  constructor($element, data) {
    this.#$formReserve = $element.find('.js-form-reserve');
    this.#formData = data;

    const $dateRange = $element.find('.js-form-reserve__date');
    this.#dateRange = new DateRange($dateRange);

    this.#init();
  }

  #handleDatePickerSubmit() {
    this.#setPayment();
  }

  static formatNumberToStr(num) {
    const n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
  }

  #init() {
    const $guests = this.#$formReserve
      .find('.js-form-reserve__guests');
    new DropdownQuantity($guests);

    const {
      number, level, pricePerDay, priceService, priceDiscount, priceAdditionally,
    } = this.#formData;

    this.#$formReserve
      .find('.js-form-reserve__room-info-number')
      .text(number);
    this.#$formReserve
      .find('.js-form-reserve__room-info-level')
      .text(level);
    this.#$formReserve
      .find('.js-form-reserve__room-price-amount')
      .text(FormReserve.formatNumberToStr(pricePerDay));
    this.#$formReserve
      .find('.js-form-reserve__pay-days-price')
      .text(FormReserve.formatNumberToStr(pricePerDay));
    this.#$formReserve
      .find('.js-form-reserve__pay-services-price')
      .text(FormReserve.formatNumberToStr(priceDiscount));
    this.#$formReserve
      .find('.js-form-reserve__pay-services-amount-total')
      .text(FormReserve.formatNumberToStr(priceService));
    this.#$formReserve
      .find('.js-form-reserve__pay-other-amount-total')
      .text(FormReserve.formatNumberToStr(priceAdditionally));
    this.#$formReserve
      .on('datepicker.submit', this.#handleDatePickerSubmit.bind(this));
    this.#setPayment();
  }

  #setPayment() {
    const {
      pricePerDay, priceDiscount, priceAdditionally, priceService,
    } = this.#formData;

    const totalDays = this.#dateRange.getDateRange();
    const payForAllDays = pricePerDay * totalDays;
    const payBase = priceDiscount + priceAdditionally + priceService;
    const payTotal = payForAllDays - payBase;

    this.#$formReserve
      .find('.js-form-reserve__pay-days-quantity')
      .text(totalDays);
    this.#$formReserve
      .find('.js-form-reserve__pay-amount-total')
      .text(FormReserve.formatNumberToStr(payForAllDays));
    this.#$formReserve
      .find('.js-form-reserve__total-amount')
      .text(FormReserve.formatNumberToStr(payTotal));
  }
}

export default FormReserve;
