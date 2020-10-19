'use strict'

import reserve from './form-reservation.json';
import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';
import '../button/button';
import './form-reservation.sass';


const $formReserve = $('.form-reserve');
const dateRange = new DateRange($formReserve.find('.date-range'));

new DropdownQuantity($formReserve.find('.dropdown-quantity'));

$formReserve.find('.form-reserve__room-info-number').text(reserve.number);
$formReserve.find('.form-reserve__room-info-level').text(reserve.level);
$formReserve.find('.form-reserve__room-price-amount').text(getNumberStr(reserve.pricePerDay));
$formReserve.find('.form-reserve__pay-days-price').text(getNumberStr(reserve.pricePerDay));
$formReserve.find('.form-reserve__pay-services-price').text(getNumberStr(reserve.priceServiceDiscount));
$formReserve.find('.form-reserve__pay-services-amount-total').text(getNumberStr(reserve.priceService));
$formReserve.find('.form-reserve__pay-other-amount-total').text(getNumberStr(reserve.priceServiceAdditionally));

$formReserve.on('date-picker-submit', setPayment);

function setPayment() {
  const totalDays = dateRange.getDateRange();
  const payForAllDays = reserve.pricePerDay * totalDays;
  const payTotal = payForAllDays - reserve.priceServiceDiscount + reserve.priceServiceAdditionally + reserve.priceService;

  $formReserve.find('.form-reserve__pay-days-quantity').text(totalDays);
  $formReserve.find('.form-reserve__pay-amount-total').text(getNumberStr(payForAllDays));
  $formReserve.find('.form-reserve__total-amount').text(getNumberStr(payTotal));
}

function getNumberStr(num) {
  const n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}

setPayment();