'use strict'

import('../button/button');
import('./quantity-select.sass');


;(function ($) {
  $.fn.quantitySelect = function () {

    let $quantitySelect = $('.quantity-select');
    let selected = $quantitySelect.find('.quantity-select__selected');
    let dropdown = $quantitySelect.find('.quantity-select__dropdown');
    let picker = $quantitySelect.find('.quantity-select__picker');
    let minus = $quantitySelect.find('.quantity-select__picker-minus');
    let plus = $quantitySelect.find('.quantity-select__picker-plus');
    let pickerQuantity = $quantitySelect.find('.quantity-select__picker-quantity');
    let clear = $quantitySelect.find('.quantity-select__clear');
    let submit = $quantitySelect.find('.quantity-select__submit');

    let guests = {
      adults: Number($(pickerQuantity[0]).text()),
      children: Number($(pickerQuantity[1]).text()),
      babies: Number($(pickerQuantity[2]).text()),
      isAdult: undefined,
      isChild: undefined,
      isBaby: undefined
    };

    function clearPicker() {
      guests.adults = 0;
      guests.children = 0;
      guests.babies = 0;
      setCaption();
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
      $(pickerQuantity[0]).text(guests.adults);
      $(pickerQuantity[1]).text(guests.children);
      $(pickerQuantity[2]).text(guests.babies);
      switch (adultsAndChildren) {
        case 0:
          clear.css('visibility', 'hidden');
          selectedMessage = 'Сколько гостей';
          break;
        case 1:
          clear.css('visibility', 'visible');
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
      selected.val(selectedMessage);
    }

    function togglePicker() {
      if (picker.css('display') === 'none') {
        picker.css('display', 'block');
      } else {
        picker.css('display', 'none');
      }
    }

    function pickerHidden(evt) {
      if (picker.has(evt.target).length === 0) picker.css('display', 'none');
    }

    function adultAdd() {
      guests.isAdult = false;
      setValidGuests();
      setCaption();
    }

    function adultDel() {
      guests.isChild = false;
      setValidGuests();
      setCaption();
    }

    function childrenAdd() {
      guests.isBaby = false;
      setValidGuests();
      setCaption();
    }

    function childrenDel() {
      guests.isAdult = true;
      setValidGuests();
      setCaption();
    }

    function babyAdd() {
      guests.isChild = true;
      setValidGuests();
      setCaption();
    }

    function babyDel() {
      guests.isBaby = true;
      setValidGuests();
      setCaption();
    }

    dropdown.on('click', togglePicker);
    clear.on('click', clearPicker);
    submit.on('click', togglePicker);
    $(minus[0]).on('click', adultAdd);
    $(minus[1]).on('click', adultDel);
    $(minus[2]).on('click', childrenAdd);
    $(plus[0]).on('click', childrenDel);
    $(plus[1]).on('click', babyAdd);
    $(plus[2]).on('click', babyDel);

    document.addEventListener('mouseup', pickerHidden);

    return this;

  }
})($);

$().quantitySelect();