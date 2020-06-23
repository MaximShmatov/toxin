'use strict'

import '../button/button';
import './dropdown-guest.sass';

export class DropdownGuests {
  #$dropdown = $('.dropdown-guests');
  #$headOut = this.#$dropdown.find('.dropdown-guests__head-out');
  #$headButton = this.#$dropdown.find('.dropdown-guests__head-button');
  #$picker = this.#$dropdown.find('.dropdown-guests__picker');
  #$minus = this.#$dropdown.find('.dropdown-guests__picker-item-quantity-minus');
  #$plus = this.#$dropdown.find('.dropdown-guests__picker-item-quantity-plus');
  #$amount = this.#$dropdown.find('.dropdown-guests__picker-item-quantity-amount');
  #$clear = this.#$dropdown.find('.dropdown-guests__picker-item-clear');
  #$submit = this.#$dropdown.find('.dropdown-guests__picker-item-submit');

  guests = {
    adults: Number($(this.#$amount[0]).text()),
    children: Number($(this.#$amount[1]).text()),
    babies: Number($(this.#$amount[2]).text()),
    isAdult: undefined,
    isChild: undefined,
    isBaby: undefined,
  }

  constructor($dropdownGuests) {
    this.#$dropdown = $dropdownGuests;
    this.#$clear.on('click', this.#clearPicker.bind(this));
    this.#$headButton.on('click', this.guestsPickerToggle.bind(this));
    this.#$submit.on('click', this.guestsPickerToggle.bind(this));
    $(this.#$minus[0]).on('click', this.#adultDel.bind(this));
    $(this.#$minus[1]).on('click', this.#childrenDel.bind(this));
    $(this.#$minus[2]).on('click', this.#babyDel.bind(this));
    $(this.#$plus[0]).on('click', this.#adultAdd.bind(this));
    $(this.#$plus[1]).on('click', this.#childrenAdd.bind(this));
    $(this.#$plus[2]).on('click', this.#babyAdd.bind(this));

    document.addEventListener('mouseup', this.#pickerHidden.bind(this));
  }

  #setValidGuests() {
    let adultsAndChildren = this.guests.adults + this.guests.children;
    switch (this.guests.isAdult) {
      case true:
        if (adultsAndChildren < 5) this.guests.adults++;
        break;
      case undefined:
        break;
      case false:
        if (this.guests.adults > 0) this.guests.adults--;
    }
    adultsAndChildren = this.guests.adults + this.guests.children;
    switch (this.guests.isChild) {
      case true:
        if (adultsAndChildren < 5) this.guests.children++;
        break;
      case undefined:
        break;
      case false:
        if (this.guests.children > 0) this.guests.children--;
    }
    adultsAndChildren = this.guests.adults + this.guests.children;
    if (adultsAndChildren > 0) {
      switch (this.guests.isBaby) {
        case true:
          if (this.guests.babies < 5) this.guests.babies++;
          break;
        case undefined:
          break;
        case false:
          if (this.guests.babies !== 0) this.guests.babies--;
      }
    } else this.guests.babies = 0;
    this.guests.isAdult = undefined;
    this.guests.isChild = undefined;
    this.guests.isBaby = undefined;
  }

  #setCaption() {
    let selectedMessage = '';
    let adultsAndChildren = this.guests.adults + this.guests.children;
    $(this.#$amount[0]).text(this.guests.adults);
    $(this.#$amount[1]).text(this.guests.children);
    $(this.#$amount[2]).text(this.guests.babies);
    switch (adultsAndChildren) {
      case 0:
        this.#$clear.css('visibility', 'hidden');
        selectedMessage = 'Сколько гостей';
        break;
      case 1:
        this.#$clear.css('visibility', 'visible');
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
    switch (this.guests.babies) {
      case 1:
        selectedMessage = selectedMessage + `, ${this.guests.babies} младенец`;
        break;
      case 2:
      case 3:
      case 4:
        selectedMessage = selectedMessage + `, ${this.guests.babies} младенца`;
        break;
      case 5:
        selectedMessage = selectedMessage + `, ${this.guests.babies} младенцев`;
    }
    this.#$headOut.val(selectedMessage);
  }

  #setDisabledMinus() {
    switch (this.guests.adults) {
      case 0:
        $(this.#$minus[0]).prop('disabled', true);
        break;
      case 1:
        $(this.#$minus[0]).prop('disabled', false);
    }
    switch (this.guests.children) {
      case 0:
        $(this.#$minus[1]).prop('disabled', true);
        break;
      case 1:
        $(this.#$minus[1]).prop('disabled', false);
    }
    switch (this.guests.babies) {
      case 0:
        $(this.#$minus[2]).prop('disabled', true);
        break;
      case 1:
        $(this.#$minus[2]).prop('disabled', false);
    }
  }

  #adultAdd() {
    this.guests.isAdult = true;
    this.#setValidGuests();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #adultDel() {
    this.guests.isAdult = false;
    this.#setValidGuests();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #childrenAdd() {
    this.guests.isChild = true;
    this.#setValidGuests();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #childrenDel() {
    this.guests.isChild = false;
    this.#setValidGuests();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #babyAdd() {
    this.guests.isBaby = true;
    this.#setValidGuests();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #babyDel() {
    this.guests.isBaby = false;
    this.#setValidGuests();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #clearPicker() {
    this.guests.adults = 0;
    this.guests.children = 0;
    this.guests.babies = 0;
    this.#setCaption();
    this.#setDisabledMinus();
  }

  guestsPickerToggle() {
    if (this.#$picker.css('display') === 'none') {
      this.#$picker.addClass('dropdown-guests__picker_display');
    } else {
      this.#$picker.removeClass('dropdown-guests__picker_display');
    }
  }

  #pickerHidden(evt) {
    if (this.#$picker.has(evt.target).length === 0) this.#$picker.removeClass('dropdown-guests__picker_display');
  }
}