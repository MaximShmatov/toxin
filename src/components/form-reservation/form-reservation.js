import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';

class FormReservation {
  #$payDays;

  #$payAmount;

  #$payTotal;

  #pricePerDay;

  #servicePrice;

  #discountPrice;

  #additionallyPrice;

  #dateRange;

  constructor($form) {
    this.#init($form);
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

  #init($component) {
    const price = $component.find('.js-form-reserve__pay-days-price').text();
    this.#pricePerDay = Number(price.slice(0, -1).replace(/ /g, ''));
    this.#servicePrice = Number($component.find('.js-form-reserve__pay-services-price').text());
    this.#discountPrice = Number($component.find('.js-form-reserve__pay-services-amount-total').text());
    this.#additionallyPrice = Number($component.find('.js-form-reserve__pay-other-amount-total').text());
    this.#dateRange = new DateRange($component);
    new DropdownQuantity($component);

    this.#$payDays = $component.find('.js-form-reserve__pay-days-quantity');
    this.#$payAmount = $component.find('.js-form-reserve__pay-amount-total');
    this.#$payTotal = $component.find('.js-form-reserve__total-amount');
  }

  #calcPayment() {
    const totalDays = this.#dateRange.getDateRange();
    const payForAllDays = this.#pricePerDay * totalDays;
    const payBase = this.#discountPrice + this.#additionallyPrice + this.#servicePrice;
    const payTotal = payForAllDays - payBase;

    this.#$payDays.text(totalDays);
    this.#$payAmount.text(this.formatNumberToStr(payForAllDays));
    this.#$payTotal.text(this.formatNumberToStr(payTotal));
  }
}

export default FormReservation;
