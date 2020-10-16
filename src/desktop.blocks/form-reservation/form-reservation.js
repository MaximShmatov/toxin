'use strict'

import reserv from '../../resources/form-reservation/form-reservation.json';
import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';
import '../button/button';
import './form-reservation.sass';


const $formReserv = $('.form-reservation');
const dateRange = new DateRange($formReserv.find('.date-range'));

new DropdownQuantity($formReserv.find('.dropdown-quantity'));

$formReserv.find('.form-reservation__room-info-number').text(reserv.number);
$formReserv.find('.form-reservation__room-info-level').text(reserv.level);
$formReserv.find('.form-reservation__room-price-amount').text(getNumberStr(reserv.pricePerDay));
$formReserv.find('.form-reservation__pay-days-price').val(getNumberStr(reserv.pricePerDay));
$formReserv.find('.form-reservation__pay-services-price').val(getNumberStr(reserv.priceServiceDiscount));
$formReserv.find('.form-reservation__pay-services-amount-total').val(getNumberStr(reserv.priceService));
$formReserv.find('.form-reservation__pay-additionally-amount-total').val(getNumberStr(reserv.priceServiceAdditionally));

setPayment();

function setPayment() {
  const totalDays = dateRange.getDateRange();
  const payForAllDays = reserv.pricePerDay * totalDays;
  const payTotal = payForAllDays - reserv.priceServiceDiscount + reserv.priceServiceAdditionally + reserv.priceService;

  $formReserv.find('.form-reservation__pay-days-quantity').val(totalDays);
  $formReserv.find('.form-reservation__pay-amount-total').val(getNumberStr(payForAllDays));
  $formReserv.find('.form-reservation__total-amount').val(getNumberStr(payTotal));
}

function getNumberStr(num) {
  let n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}

$formReserv.on('date-picker_submit', setPayment);