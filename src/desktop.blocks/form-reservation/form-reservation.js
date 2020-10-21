'use strict'

import reserve from './form-reservation.json';
import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';
import '../button/button';
import './form-reservation.sass';

(function ($) {
  const $formReserve = $('.js-form-reserve');

  const {number, level, pricePerDay, priceService, priceServiceDiscount, priceServiceAdditionally} = reserve;
  $formReserve.find('.js-form-reserve__room-info-number').text(number);
  $formReserve.find('.js-form-reserve__room-info-level').text(level);
  $formReserve.find('.js-form-reserve__room-price-amount').text(getNumberStr(pricePerDay));
  $formReserve.find('.js-form-reserve__pay-days-price').text(getNumberStr(pricePerDay));
  $formReserve.find('.js-form-reserve__pay-services-price').text(getNumberStr(priceServiceDiscount));
  $formReserve.find('.js-form-reserve__pay-services-amount-total').text(getNumberStr(priceService));
  $formReserve.find('.js-form-reserve__pay-other-amount-total').text(getNumberStr(priceServiceAdditionally));

  $formReserve.on('datepicker.submit', handleDatePickerSubmit);

  const $dropdown = $formReserve.find('.js-dropdown-quantity')
  new DropdownQuantity($dropdown);

  const $dateRange = $formReserve.find('.js-date-range')
  const dateRange = new DateRange($dateRange);
  setPayment();

  function handleDatePickerSubmit() {
    setPayment();
  }

  function setPayment() {
    const totalDays = dateRange.getDateRange();
    const payForAllDays = pricePerDay * totalDays;
    const payTotal = payForAllDays - priceServiceDiscount + priceServiceAdditionally + priceService;

    $formReserve.find('.js-form-reserve__pay-days-quantity').text(totalDays);
    $formReserve.find('.js-form-reserve__pay-amount-total').text(getNumberStr(payForAllDays));
    $formReserve.find('.js-form-reserve__total-amount').text(getNumberStr(payTotal));
  }

  function getNumberStr(num) {
    const n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }
})(window.$);

