'use strict'

import './__room.sass';
import '../../button/button';

let $filterRoom = $('.filter__room');
let $headOut = $filterRoom.find('.filter__room-head-out');
let $headButton = $filterRoom.find('.filter__room-head-button');
let $picker = $filterRoom.find('.filter__room-picker');
let $minus = $filterRoom.find('.filter__room-picker-item-quantity-minus');
let $plus = $filterRoom.find('.filter__room-picker-item-quantity-plus');
let $amount = $filterRoom.find('.filter__room-picker-item-quantity-amount');

let room = {
  bedrooms: Number($($amount[0]).text()),
  beds: Number($($amount[1]).text()),
  bathrooms: Number($($amount[2]).text()),
  isBedrooms: undefined,
  isBeds: undefined,
  isBathrooms: undefined,
}

function setValidRoom() {

  switch (room.isBedrooms) {
    case true:
      if (room.bedrooms < 5) room.bedrooms++;
      break;
    case undefined:
      break;
    case false:
      if (room.bedrooms > 0) room.bedrooms--;
  }

  switch (room.isBeds) {
    case true:
      if (room.beds < 5) room.beds++;
      break;
    case undefined:
      break;
    case false:
      if (room.beds > 0) room.beds--;
  }

  switch (room.isBathrooms) {
    case true:
      if (room.bathrooms < 5) room.bathrooms++;
      break;
    case undefined:
      break;
    case false:
      if (room.bathrooms > 0) room.bathrooms--;
  }
  room.isBedrooms = undefined;
  room.isBeds = undefined;
  room.isBathrooms = undefined;
}

function setCaption() {
  let selectedMessage = '';
  $($amount[0]).text(room.bedrooms);
  $($amount[1]).text(room.beds);
  $($amount[2]).text(room.bathrooms);
  switch (room.bedrooms) {
    case 0:
      selectedMessage = 'Удобства номера';
      break;
    case 1:
      selectedMessage = `${room.bedrooms} спальня`;
      break;
    case 2:
    case 3:
    case 4:
      selectedMessage = `${room.bedrooms} спальни`;
      break;
    case 5:
      selectedMessage = `${room.bedrooms} спален`;
  }
  switch (room.beds) {
    case 1:
      selectedMessage = selectedMessage + `, ${room.beds} кровать...`;
      break;
    case 2:
    case 3:
    case 4:
      selectedMessage = selectedMessage + `, ${room.beds} кровати...`;
      break;
    case 5:
      selectedMessage = selectedMessage + `, ${room.beds} кроватей...`;
  }
  $headOut.val(selectedMessage);
}

function setDisabledMinus() {
  switch (room.bedrooms) {
    case 0:
      $($minus[0]).prop('disabled', true);
      break;
    case 1:
      $($minus[0]).prop('disabled', false);
  }
  switch (room.beds) {
    case 0:
      $($minus[1]).prop('disabled', true);
      break;
    case 1:
      $($minus[1]).prop('disabled', false);
  }
  switch (room.bathrooms) {
    case 0:
      $($minus[2]).prop('disabled', true);
      break;
    case 1:
      $($minus[2]).prop('disabled', false);
  }
}

function bedroomsAdd() {
  room.isBedrooms = true;
  setValidRoom();
  setCaption();
  setDisabledMinus();
}

function bedroomsDel() {
  room.isBedrooms = false;
  setValidRoom();
  setCaption();
  setDisabledMinus();
}

function bedsAdd() {
  room.isBeds = true;
  setValidRoom();
  setCaption();
  setDisabledMinus();
}

function bedsDel() {
  room.isBeds = false;
  setValidRoom();
  setCaption();
  setDisabledMinus();
}

function bathroomsAdd() {
  room.isBathrooms = true;
  setValidRoom();
  setCaption();
  setDisabledMinus();
}

function bathroomsDel() {
  room.isBathrooms = false;
  setValidRoom();
  setCaption();
  setDisabledMinus();
}

function roomPickerToggle() {
  if ($picker.css('display') === 'none') {
    $picker.addClass('filter__room-picker_display');
    $('.filter__room-head').addClass('filter__room-head_border-color');
  } else {
    $picker.removeClass('filter__room-picker_display');
    $('.filter__room-head').removeClass('filter__room-head_border-color');
  }
}

function pickerHidden(evt) {
  if ($picker.has(evt.target).length === 0) $picker.removeClass('filter__room-picker_display');
  $('.filter-room-head').removeClass('filter__room-head_border-color');
}

$headButton.on('click', roomPickerToggle);
$($minus[0]).on('click', bedroomsDel);
$($minus[1]).on('click', bedsDel);
$($minus[2]).on('click', bathroomsDel);
$($plus[0]).on('click', bedroomsAdd);
$($plus[1]).on('click', bedsAdd);
$($plus[2]).on('click', bathroomsAdd);

document.addEventListener('mouseup', pickerHidden);

export {room};