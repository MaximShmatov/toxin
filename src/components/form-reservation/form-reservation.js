import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';

class FormReservation {
  #$payDays;

  #$payAmount;

  #$payTotal;

  #number;

  #level;

  #pricePerDay;

  #priceService;

  #priceDiscount;

  #priceAdditionally;

  #dateRange;

  constructor($form, dataForm) {
    this.#init($form, dataForm);
    this.#initView($form);
    this.#calcPayment();
    this.#setHandles($form);
  }

  formatNumberToStr(num) {
    return String(num).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
  }

  #handleDatePickerSubmit() {
    this.#calcPayment();
  }

  #setHandles($component) {
    $component.on('datepicker.submit', this.#handleDatePickerSubmit.bind(this));
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
    this.#number = number;
    this.#level = level;
    this.#pricePerDay = pricePerDay;
    this.#priceService = priceService;
    this.#priceDiscount = priceDiscount;
    this.#priceAdditionally = priceAdditionally;
    this.#dateRange = new DateRange($component);
    new DropdownQuantity($component);

    this.#$payDays = $component.find('.js-form-reserve__pay-days-quantity');
    this.#$payAmount = $component.find('.js-form-reserve__pay-amount-total');
    this.#$payTotal = $component.find('.js-form-reserve__total-amount');
  }

  #initView ($component) {
    $component.find('.js-form-reserve__room-info-number')
      .text(this.#number);
    $component.find('.js-form-reserve__room-info-level')
      .text(this.#level);
    $component.find('.js-form-reserve__room-price-amount')
      .text(this.formatNumberToStr(this.#pricePerDay));
    $component.find('.js-form-reserve__pay-days-price')
      .text(this.formatNumberToStr(this.#pricePerDay));
    $component.find('.js-form-reserve__pay-services-price')
      .text(this.formatNumberToStr(this.#priceDiscount));
    $component.find('.js-form-reserve__pay-services-amount-total')
      .text(this.formatNumberToStr(this.#priceService));
    $component.find('.js-form-reserve__pay-other-amount-total')
      .text(this.formatNumberToStr(this.#priceAdditionally));
  }

  #calcPayment() {
    const totalDays = this.#dateRange.getDateRange();
    const payForAllDays = this.#pricePerDay * totalDays;
    const payBase = this.#priceDiscount + this.#priceAdditionally + this.#priceService;
    const payTotal = payForAllDays - payBase;

    this.#$payDays.text(totalDays);
    this.#$payAmount.text(this.formatNumberToStr(payForAllDays));
    this.#$payTotal.text(this.formatNumberToStr(payTotal));
  }
}

export default FormReservation;
