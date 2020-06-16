'use strict'

import('../button/button');
import('./dropdown-guest.sass');

let $dropdown = $('.dropdown-guests');
let $headOut = $dropdown.find('.dropdown-guests__head-out');
let $HeadButton = $dropdown.find('.dropdown-guests__head-button');
let $picker = $dropdown.find('.dropdown-guests__picker');
let $minus = $dropdown.find('.dropdown-guests__picker-item-quantity-minus');
let $plus = $dropdown.find('.dropdown-guests__picker-item-quantity-plus');
let $amount = $dropdown.find('.dropdown-guests__picker-item-quantity-amount');
let $clear = $dropdown.find('.dropdown-guests__picker-item-clear');
let $submit = $dropdown.find('.dropdown-guests__picker-item-submit');

let guests = {
  adults: Number($($amount[0]).text()),
  children: Number($($amount[1]).text()),
  babies: Number($($amount[2]).text()),
  isAdult: undefined,
  isChild: undefined,
  isBaby: undefined,
}

function setValidGuests() {
  let adultsAndChildren = guests.adults + guests.children;
  switch (guests.isAdult) {
    case true:
      if (adultsAndChildren < 5) guests.adults++;
      break;
    case undefined:
      break;
    case false:
      if (guests.adults > 0) guests.adults--;
  }
  adultsAndChildren = guests.adults + guests.children;
  switch (guests.isChild) {
    case true:
      if (adultsAndChildren < 5) guests.children++;
      break;
    case undefined:
      break;
    case false:
      if (guests.children > 0) guests.children--;
  }
  adultsAndChildren = guests.adults + guests.children;
  if (adultsAndChildren > 0) {
    switch (guests.isBaby) {
      case true:
        if (guests.babies < 5) guests.babies++;
        break;
      case undefined:
        break;
      case false:
        if (guests.babies !== 0) guests.babies--;
    }
  } else guests.babies = 0;
  guests.isAdult = undefined;
  guests.isChild = undefined;
  guests.isBaby = undefined;
}

function setCaption() {
  let selectedMessage = '';
  let adultsAndChildren = guests.adults + guests.children;
  $($amount[0]).text(guests.adults);
  $($amount[1]).text(guests.children);
  $($amount[2]).text(guests.babies);
  switch (adultsAndChildren) {
    case 0:
      $clear.css('visibility', 'hidden');
      selectedMessage = 'Сколько гостей';
      break;
    case 1:
      $clear.css('visibility', 'visible');
      selectedMessage = `${adultsAndChildren} гость`;
      break;
    case 2:
    case 3:
    case 4:
      selectedMessage = `${adultsAndChildren} гостя`;
      break;
    case 5:
      selectedMessage = `${adultsAndChildren} гостей`;
  }
  switch (guests.babies) {
    case 1:
      selectedMessage = selectedMessage + `, ${guests.babies} младенец`;
      break;
    case 2:
    case 3:
    case 4:
      selectedMessage = selectedMessage + `, ${guests.babies} младенца`;
      break;
    case 5:
      selectedMessage = selectedMessage + `, ${guests.babies} младенцев`;
  }
  $headOut.val(selectedMessage);
}

function setDisabledMinus() {
  switch (guests.adults) {
    case 0:
      $($minus[0]).prop('disabled', true);
      break;
    case 1:
      $($minus[0]).prop('disabled', false);
  }
  switch (guests.children) {
    case 0:
      $($minus[1]).prop('disabled', true);
      break;
    case 1:
      $($minus[1]).prop('disabled', false);
  }
  switch (guests.babies) {
    case 0:
      $($minus[2]).prop('disabled', true);
      break;
    case 1:
      $($minus[2]).prop('disabled', false);
  }
}

function adultAdd() {
  guests.isAdult = true;
  setValidGuests();
  setCaption();
  setDisabledMinus();
}

function adultDel() {
  guests.isAdult = false;
  setValidGuests();
  setCaption();
  setDisabledMinus();
}

function childrenAdd() {
  guests.isChild = true;
  setValidGuests();
  setCaption();
  setDisabledMinus();
}

function childrenDel() {
  guests.isChild = false;
  setValidGuests();
  setCaption();
  setDisabledMinus();
}

function babyAdd() {
  guests.isBaby = true;
  setValidGuests();
  setCaption();
  setDisabledMinus();
}

function babyDel() {
  guests.isBaby = false;
  setValidGuests();
  setCaption();
  setDisabledMinus();
}

function clearPicker() {
  guests.adults = 0;
  guests.children = 0;
  guests.babies = 0;
  setCaption();
  setDisabledMinus();
}

function setGuestsSessionStorage() {
  sessionStorage.setItem('guests', $headOut.val());
  guestsPickerToggle();
}

function guestsPickerToggle() {
  if ($picker.css('display') === 'none') {
    $picker.addClass('dropdown-guests__picker_display');
    $('.dropdown__head').addClass('dropdown-guests__head_border-color');
  } else {
    $picker.removeClass('dropdown-guests__picker_display');
    $('.dropdown__head').removeClass('dropdown-guests__head_border-color');
  }
}

function pickerHidden(evt) {
  if ($picker.has(evt.target).length === 0) $picker.removeClass('dropdown-guests__picker_display');
  $('.dropdown__head').removeClass('dropdown-guests__head_border-color');
}

$HeadButton.on('click', guestsPickerToggle);
$clear.on('click', clearPicker);
$submit.on('click', setGuestsSessionStorage);
$($minus[0]).on('click', adultDel);
$($minus[1]).on('click', childrenDel);
$($minus[2]).on('click', babyDel);
$($plus[0]).on('click', adultAdd);
$($plus[1]).on('click', childrenAdd);
$($plus[2]).on('click', babyAdd);

document.addEventListener('mouseup', pickerHidden);