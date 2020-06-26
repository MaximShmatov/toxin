'use strict'

import './form-reservation.sass';
import reservation from '../../resources/form-reservation/form-reservation.json';
import {DateRange} from '../date-range/date-range';
import {DropdownQuantity} from '../dropdown-quantity/dropdown-quantity';
import '../button/button';

let $formReservation = $('.form-reservation');

let dateRange = new DateRange($formReservation.find('.date-range'));
new DropdownQuantity($formReservation.find('.dropdown-quantity'));

$formReservation.find('.form-reservation__room-info-number').val(reservation.number);
$formReservation.find('.form-reservation__room-info-level').val(reservation.level);
$formReservation.find('.form-reservation__room-price-amount').val(getNumberStr(reservation.pricePerDay));
$formReservation.find('.form-reservation__pay-days-price').val(getNumberStr(reservation.pricePerDay));
$formReservation.find('.form-reservation__pay-services-price').val(getNumberStr(reservation.priceServiceDiscount));
$formReservation.find('.form-reservation__pay-services-amount-total').val(getNumberStr(reservation.priceService));
$formReservation.find('.form-reservation__pay-additionally-amount-total').val(getNumberStr(reservation.priceServiceAdditionally));

setPayment();

function setPayment() {

  let totalDays = dateRange.getDateRange();
  let payForAllDays = reservation.pricePerDay * totalDays;
  let payTotal = payForAllDays - reservation.priceServiceDiscount + reservation.priceServiceAdditionally + reservation.priceService;
  $formReservation.find('.form-reservation__pay-days-quantity').val(totalDays);
  $formReservation.find('.form-reservation__pay-amount-total').val(getNumberStr(payForAllDays));
  $formReservation.find('.form-reservation__total-amount').val(getNumberStr(payTotal));
}

function getNumberStr(num) {
  let n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}

$formReservation.on('date-picker_submit', setPayment);