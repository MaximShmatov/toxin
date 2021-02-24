import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';

class FormReservation {
  #$payDays;

  #$payAmount;

  #$payTotal;

  #pricePerDay;

  #priceService;

  #priceDiscount;

  #priceAdditionally;

  #dateRange;

  constructor($form, dataForm) {
    this.#init($form, dataForm);
    this.#setPayment();
  }

  #handleDatePickerSubmit() {
    this.#setPayment();
  }

  static formatNumberToStr(num) {
    const n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
  }

  #init($component, data) {
    const {
      number,
      level,
      pricePerDay,
      priceService,
      priceDiscount,
      priceAdditionally,
    } = data;
    this.#pricePerDay = pricePerDay;
    this.#priceService = priceService;
    this.#priceDiscount = priceDiscount;
    this.#priceAdditionally = priceAdditionally;
    this.#dateRange = new DateRange($component);
    new DropdownQuantity($component);

    this.#$payDays = $component.find('.js-form-reserve__pay-days-quantity');
    this.#$payAmount = $component.find('.js-form-reserve__pay-amount-total');
    this.#$payTotal = $component.find('.js-form-reserve__total-amount');

    $component.find('.js-form-reserve__room-info-number')
      .text(number);
    $component.find('.js-form-reserve__room-info-level')
      .text(level);
    $component.find('.js-form-reserve__room-price-amount')
      .text(FormReservation.formatNumberToStr(pricePerDay));
    $component.find('.js-form-reserve__pay-days-price')
      .text(FormReservation.formatNumberToStr(pricePerDay));
    $component.find('.js-form-reserve__pay-services-price')
      .text(FormReservation.formatNumberToStr(priceDiscount));
    $component.find('.js-form-reserve__pay-services-amount-total')
      .text(FormReservation.formatNumberToStr(priceService));
    $component.find('.js-form-reserve__pay-other-amount-total')
      .text(FormReservation.formatNumberToStr(priceAdditionally));
    $component.on('datepicker.submit', this.#handleDatePickerSubmit.bind(this));
  }

  #setPayment() {
    const totalDays = this.#dateRange.getDateRange();
    const payForAllDays = this.#pricePerDay * totalDays;
    const payBase = this.#priceDiscount + this.#priceAdditionally + this.#priceService;
    const payTotal = payForAllDays - payBase;

    this.#$payDays.text(totalDays);
    this.#$payAmount.text(FormReservation.formatNumberToStr(payForAllDays));
    this.#$payTotal.text(FormReservation.formatNumberToStr(payTotal));
  }
}

export default FormReservation;
