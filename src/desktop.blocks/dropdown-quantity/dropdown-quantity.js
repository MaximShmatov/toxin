'use strict'

import '../button/button';
import './dropdown-quantity.sass';


class DropdownQuantity {
  #$dropdown;
  #$headOut;
  #$header;
  #$itemHeader;
  #$picker;
  #$minus;
  #$plus;
  #$amount;
  #$clear;
  #$submit;
  #setValidQuantity;
  #setCaption;
  #quantity = {
    firstItem: 0,
    secondItem: 0,
    thirdItem: 0,
    isFirstItem: undefined,
    isSecondItem: undefined,
    isThirdItem: undefined,
  }

  constructor($dropdown, mode) {
    this.#$dropdown = $dropdown;
    this.#$header = $dropdown.find('.dropdown-quantity__head');
    this.#$itemHeader = $dropdown.find('.dropdown-quantity__picker-item-header')
    this.#$headOut = $dropdown.find('.dropdown-quantity__head-out');
    this.#$picker = $dropdown.find('.dropdown-quantity__picker');
    this.#$minus = $dropdown.find('.dropdown-quantity__picker-item-quantity-minus');
    this.#$plus = $dropdown.find('.dropdown-quantity__picker-item-quantity-plus');
    this.#$amount = $dropdown.find('.dropdown-quantity__picker-item-quantity-amount');
    this.#$clear = $dropdown.find('.dropdown-quantity__picker-item-clear');
    this.#$submit = $dropdown.find('.dropdown-quantity__picker-item-submit');

    this.#$clear.on('click', this.#clearPicker.bind(this));
    this.#$header.on('click', this.togglePicker.bind(this));
    this.#$submit.on('click', this.togglePicker.bind(this));
    this.#$minus.eq(0).on('click', this.#firstItemDel.bind(this));
    this.#$minus.eq(1).on('click', this.#secondItemDel.bind(this));
    this.#$minus.eq(2).on('click', this.#thirdItemDel.bind(this));
    this.#$plus.eq(0).on('click', this.#firstItemAdd.bind(this));
    this.#$plus.eq(1).on('click', this.#secondItemAdd.bind(this));
    this.#$plus.eq(2).on('click', this.#thirdItemAdd.bind(this));

    document.addEventListener('mouseup', this.#pickerHidden.bind(this));

    if (mode === 'room') this.#initRoomMode();
    else this.#initGuestsMode();
    this.togglePicker();
  }

  togglePicker() {
    this.#$picker.toggleClass('dropdown-quantity__picker_hidden');
  }

  #initRoomMode() {
    this.#$picker.find('.dropdown-quantity__picker-item:last-of-type')
      .addClass('dropdown-quantity__picker-item_hidden');
    this.#$headOut.text('Удобства номера');
    this.#$itemHeader.eq(0).text('Спальни');
    this.#$itemHeader.eq(1).text('Кровати');
    this.#$itemHeader.eq(2).text('Ванные комнаты');
    this.#setValidQuantity = this.#setValidRoom;
    this.#setCaption = this.#setCaptionRoom;
  }

  #initGuestsMode() {
    this.#$headOut.text('Сколько гостей');
    this.#$itemHeader.eq(0).text('Взрослые');
    this.#$itemHeader.eq(1).text('Дети');
    this.#$itemHeader.eq(2).text('Младенцы');
    this.#setValidQuantity = this.#setValidGuests;
    this.#setCaption = this.#setCaptionGuests;
  }

  #setValidRoom() {
    switch (this.#quantity.isFirstItem) {
      case true:
        if (this.#quantity.firstItem < 5) this.#quantity.firstItem++;
        break;
      case undefined:
        break;
      case false:
        if (this.#quantity.firstItem > 0) this.#quantity.firstItem--;
    }
    if (this.#quantity.firstItem > 0) {
      switch (this.#quantity.isSecondItem) {
        case true:
          if (this.#quantity.secondItem < 5) this.#quantity.secondItem++;
          break;
        case undefined:
          break;
        case false:
          if (this.#quantity.secondItem > 0) this.#quantity.secondItem--;
      }
    } else {
      this.#quantity.secondItem = 0;
      this.#quantity.thirdItem = 0;
    }
    if (this.#quantity.firstItem > 0 && this.#quantity.secondItem > 0) {
      switch (this.#quantity.isThirdItem) {
        case true:
          if (this.#quantity.thirdItem < 5) this.#quantity.thirdItem++;
          break;
        case undefined:
          break;
        case false:
          if (this.#quantity.thirdItem !== 0) this.#quantity.thirdItem--;
      }
    } else this.#quantity.thirdItem = 0;
    this.#quantity.isFirstItem = undefined;
    this.#quantity.isSecondItem = undefined;
    this.#quantity.isThirdItem = undefined;
  }

  #setCaptionRoom() {
    let selectedCaption = '';
    $(this.#$amount[0]).text(this.#quantity.firstItem);
    $(this.#$amount[1]).text(this.#quantity.secondItem);
    $(this.#$amount[2]).text(this.#quantity.thirdItem);
    switch (this.#quantity.firstItem) {
      case 0:
        this.#$clear.css('visibility', 'hidden');
        selectedCaption = 'Удобства номера';
        break;
      case 1:
        this.#$clear.css('visibility', 'visible');
        selectedCaption = `${this.#quantity.firstItem} спальня`;
        break;
      case 2:
      case 3:
      case 4:
        selectedCaption = `${this.#quantity.firstItem} спальни`;
        break;
      case 5:
        selectedCaption = `${this.#quantity.firstItem} спален`;
    }
    switch (this.#quantity.secondItem) {
      case 1:
        selectedCaption = selectedCaption + `, ${this.#quantity.secondItem} кровать`;
        break;
      case 2:
      case 3:
      case 4:
        selectedCaption = selectedCaption + `, ${this.#quantity.secondItem} кровати`;
        break;
      case 5:
        selectedCaption = selectedCaption + `, ${this.#quantity.secondItem} кроватей`;
    }
    this.#$headOut.text(selectedCaption);
  }

  #setValidGuests() {
    let adultsAndChildren = this.#quantity.firstItem + this.#quantity.secondItem;
    switch (this.#quantity.isFirstItem) {
      case true:
        if (adultsAndChildren < 5) this.#quantity.firstItem++;
        break;
      case undefined:
        break;
      case false:
        if (this.#quantity.firstItem > 0) this.#quantity.firstItem--;
    }
    adultsAndChildren = this.#quantity.firstItem + this.#quantity.secondItem;
    switch (this.#quantity.isSecondItem) {
      case true:
        if (adultsAndChildren < 5) this.#quantity.secondItem++;
        break;
      case undefined:
        break;
      case false:
        if (this.#quantity.secondItem > 0) this.#quantity.secondItem--;
    }
    adultsAndChildren = this.#quantity.firstItem + this.#quantity.secondItem;
    if (adultsAndChildren > 0) {
      switch (this.#quantity.isThirdItem) {
        case true:
          if (this.#quantity.thirdItem < 5) this.#quantity.thirdItem++;
          break;
        case undefined:
          break;
        case false:
          if (this.#quantity.thirdItem !== 0) this.#quantity.thirdItem--;
      }
    } else this.#quantity.thirdItem = 0;
    this.#quantity.isFirstItem = undefined;
    this.#quantity.isSecondItem = undefined;
    this.#quantity.isThirdItem = undefined;
  }

  #setCaptionGuests() {
    let selectedCaption = '';
    let adultsAndChildren = this.#quantity.firstItem + this.#quantity.secondItem;
    $(this.#$amount[0]).text(this.#quantity.firstItem);
    $(this.#$amount[1]).text(this.#quantity.secondItem);
    $(this.#$amount[2]).text(this.#quantity.thirdItem);
    switch (adultsAndChildren) {
      case 0:
        this.#$clear.css('visibility', 'hidden');
        selectedCaption = 'Сколько гостей';
        break;
      case 1:
        this.#$clear.css('visibility', 'visible');
        selectedCaption = `${adultsAndChildren} гость`;
        break;
      case 2:
      case 3:
      case 4:
        selectedCaption = `${adultsAndChildren} гостя`;
        break;
      case 5:
        selectedCaption = `${adultsAndChildren} гостей`;
    }
    switch (this.#quantity.thirdItem) {
      case 1:
        selectedCaption = selectedCaption + `, ${this.#quantity.thirdItem} младенец`;
        break;
      case 2:
      case 3:
      case 4:
        selectedCaption = selectedCaption + `, ${this.#quantity.thirdItem} младенца`;
        break;
      case 5:
        selectedCaption = selectedCaption + `, ${this.#quantity.thirdItem} младенцев`;
    }
    this.#$headOut.text(selectedCaption);
  }

  #setDisabledMinus() {
    switch (this.#quantity.firstItem) {
      case 0:
        $(this.#$minus[0]).prop('disabled', true);
        break;
      case 1:
        $(this.#$minus[0]).prop('disabled', false);
    }
    switch (this.#quantity.secondItem) {
      case 0:
        $(this.#$minus[1]).prop('disabled', true);
        break;
      case 1:
        $(this.#$minus[1]).prop('disabled', false);
    }
    switch (this.#quantity.thirdItem) {
      case 0:
        $(this.#$minus[2]).prop('disabled', true);
        break;
      case 1:
        $(this.#$minus[2]).prop('disabled', false);
    }
  }

  #firstItemAdd() {
    this.#quantity.isFirstItem = true;
    this.#setValidQuantity();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #firstItemDel() {
    this.#quantity.isFirstItem = false;
    this.#setValidQuantity();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #secondItemAdd() {
    this.#quantity.isSecondItem = true;
    this.#setValidQuantity();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #secondItemDel() {
    this.#quantity.isSecondItem = false;
    this.#setValidQuantity();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #thirdItemAdd() {
    this.#quantity.isThirdItem = true;
    this.#setValidQuantity();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #thirdItemDel() {
    this.#quantity.isThirdItem = false;
    this.#setValidQuantity();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #clearPicker() {
    this.#quantity.firstItem = 0;
    this.#quantity.secondItem = 0;
    this.#quantity.thirdItem = 0;
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #pickerHidden(evt) {
    if (!evt.target.closest('.dropdown-quantity')) {
      this.#$picker.addClass('dropdown-quantity__picker_hidden');
    }
  }
}

export default DropdownQuantity;