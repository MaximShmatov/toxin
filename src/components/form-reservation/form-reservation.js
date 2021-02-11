import reserve from './form-reservation.json';
import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';

(function ($) {
  const $formReserve = $('.js-form-reserve');
  const {
    number,
    level,
    pricePerDay,
    priceService,
    priceDiscount,
    priceAdditionally,
  } = reserve;

  new DropdownQuantity($formReserve);
  const dateRange = new DateRange($formReserve);

  function getNumberStr(num) {
    const n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
  }

  $formReserve.find('.js-form-reserve__room-info-number').text(number);
  $formReserve.find('.js-form-reserve__room-info-level').text(level);
  $formReserve.find('.js-form-reserve__room-price-amount').text(getNumberStr(pricePerDay));
  $formReserve.find('.js-form-reserve__pay-days-price').text(getNumberStr(pricePerDay));
  $formReserve.find('.js-form-reserve__pay-services-price').text(getNumberStr(priceDiscount));
  $formReserve.find('.js-form-reserve__pay-services-amount-total').text(getNumberStr(priceService));
  $formReserve.find('.js-form-reserve__pay-other-amount-total').text(getNumberStr(priceAdditionally));

  function setPayment() {
    const totalDays = dateRange.getDateRange();
    const payForAllDays = pricePerDay * totalDays;
    const payTotal = payForAllDays - priceDiscount + priceAdditionally + priceService;

    $formReserve.find('.js-form-reserve__pay-days-quantity').text(totalDays);
    $formReserve.find('.js-form-reserve__pay-amount-total').text(getNumberStr(payForAllDays));
    $formReserve.find('.js-form-reserve__total-amount').text(getNumberStr(payTotal));
  }

  function handleDatePickerSubmit() {
    setPayment();
  }

  $formReserve.on('datepicker.submit', handleDatePickerSubmit);
  setPayment();
}(window.$));
