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

  constructor($component, mode) {
    this.#$dropdown = $component.find('.js-dropdown-quantity');

    this.#setAreas();
    this.#setHandles();

    if (mode === 'room') this.#initRoomMode();
    else this.#initGuestsMode();

    this.togglePicker();
  }

  togglePicker() {
    this.#$picker.toggleClass('dropdown-quantity__picker_hidden');
  }

  #setAreas() {
    this.#$header = this.#$dropdown.find('.js-dropdown-quantity__head');
    this.#$itemHeader = this.#$dropdown.find('.js-dropdown-quantity__picker-item-header');
    this.#$headOut = this.#$dropdown.find('.js-dropdown-quantity__head-out');
    this.#$picker = this.#$dropdown.find('.js-dropdown-quantity__picker');
    this.#$minus = this.#$dropdown.find('.js-dropdown-quantity__picker-item-quantity-minus');
    this.#$plus = this.#$dropdown.find('.js-dropdown-quantity__picker-item-quantity-plus');
    this.#$amount = this.#$dropdown.find('.js-dropdown-quantity__picker-item-quantity-amount');
    this.#$clear = this.#$dropdown.find('.js-dropdown-quantity__picker-item-clear');
    this.#$submit = this.#$dropdown.find('.js-dropdown-quantity__picker-item-submit');
  }

  #setHandles() {
    this.#$clear.on('click.dropdownquantity', this.#handlePickerButtonClearClick.bind(this));
    this.#$header.on('click.dropdownquantity', this.#handleDropdownHeadClick.bind(this));
    this.#$submit.on('click.dropdownquantity', this.#handlePickerButtonSubmitClick.bind(this));
    this.#$minus.eq(0).on('click.dropdownquantity', this.#handlePickerButtonMinusOneClick.bind(this));
    this.#$minus.eq(1).on('click.dropdownquantity', this.#handlePickerButtonMinusTwoClick.bind(this));
    this.#$minus.eq(2).on('click.dropdownquantity', this.#handlePickerButtonMinusThreeClick.bind(this));
    this.#$plus.eq(0).on('click.dropdownquantity', this.#handlePickerButtonPlusOneClick.bind(this));
    this.#$plus.eq(1).on('click.dropdownquantity', this.#handlePickerButtonPlusTwoClick.bind(this));
    this.#$plus.eq(2).on('click.dropdownquantity', this.#handlePickerButtonPlusThreeClick.bind(this));

    window.$(document).on('mouseup.dropdownquantity', this.#handleDocumentClick.bind(this));
  }

  #handlePickerButtonClearClick() {
    this.#quantity.firstItem = 0;
    this.#quantity.secondItem = 0;
    this.#quantity.thirdItem = 0;
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #handleDropdownHeadClick() {
    this.togglePicker();
  }

  #handlePickerButtonSubmitClick() {
    this.togglePicker();
  }

  #handlePickerButtonMinusOneClick() {
    this.#quantity.isFirstItem = false;
    this.#setValidQuantity();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #handlePickerButtonMinusTwoClick() {
    this.#quantity.isSecondItem = false;
    this.#setValidQuantity();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #handlePickerButtonMinusThreeClick() {
    this.#quantity.isThirdItem = false;
    this.#setValidQuantity();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #handlePickerButtonPlusOneClick() {
    this.#quantity.isFirstItem = true;
    this.#setValidQuantity();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #handlePickerButtonPlusTwoClick() {
    this.#quantity.isSecondItem = true;
    this.#setValidQuantity();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #handlePickerButtonPlusThreeClick() {
    this.#quantity.isThirdItem = true;
    this.#setValidQuantity();
    this.#setCaption();
    this.#setDisabledMinus();
  }

  #handleDocumentClick(evt) {
    if (!evt.target.closest('.js-dropdown-quantity')) {
      this.#$picker.addClass('dropdown-quantity__picker_hidden');
    }
  }

  #initRoomMode() {
    this.#$picker.find('.js-dropdown-quantity__picker-item').hide();
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
        if (this.#quantity.firstItem < 5) this.#quantity.firstItem += 1;
        break;
      case undefined:
        break;
      case false:
        if (this.#quantity.firstItem > 0) this.#quantity.firstItem -= 1;
        break;
      default:
    }
    if (this.#quantity.firstItem > 0) {
      switch (this.#quantity.isSecondItem) {
        case true:
          if (this.#quantity.secondItem < 5) this.#quantity.secondItem += 1;
          break;
        case undefined:
          break;
        case false:
          if (this.#quantity.secondItem > 0) this.#quantity.secondItem -= 1;
          break;
        default:
      }
    } else {
      this.#quantity.secondItem = 0;
      this.#quantity.thirdItem = 0;
    }
    const firstSecondSelected = this.#quantity.firstItem > 0 && this.#quantity.secondItem > 0;
    if (firstSecondSelected) {
      switch (this.#quantity.isThirdItem) {
        case true:
          if (this.#quantity.thirdItem < 5) this.#quantity.thirdItem += 1;
          break;
        case undefined:
          break;
        case false:
          if (this.#quantity.thirdItem !== 0) this.#quantity.thirdItem -= 1;
          break;
        default:
      }
    } else this.#quantity.thirdItem = 0;
    this.#quantity.isFirstItem = undefined;
    this.#quantity.isSecondItem = undefined;
    this.#quantity.isThirdItem = undefined;
  }

  #setCaptionRoom() {
    let selectedCaption = '';
    this.#$amount.eq(0).text(this.#quantity.firstItem);
    this.#$amount.eq(1).text(this.#quantity.secondItem);
    this.#$amount.eq(2).text(this.#quantity.thirdItem);
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
        break;
      default:
    }
    switch (this.#quantity.secondItem) {
      case 1:
        selectedCaption = `${selectedCaption} ${this.#quantity.secondItem} кровать`;
        break;
      case 2:
      case 3:
      case 4:
        selectedCaption = `${selectedCaption} ${this.#quantity.secondItem} кровати`;
        break;
      case 5:
        selectedCaption = `${selectedCaption} ${this.#quantity.secondItem} кроватей`;
        break;
      default:
    }
    this.#$headOut.text(selectedCaption);
  }

  #setValidGuests() {
    let adultsAndChildren = this.#quantity.firstItem + this.#quantity.secondItem;
    switch (this.#quantity.isFirstItem) {
      case true:
        if (adultsAndChildren < 5) this.#quantity.firstItem += 1;
        break;
      case undefined:
        break;
      case false:
        if (this.#quantity.firstItem > 0) this.#quantity.firstItem -= 1;
        break;
      default:
    }
    adultsAndChildren = this.#quantity.firstItem + this.#quantity.secondItem;
    switch (this.#quantity.isSecondItem) {
      case true:
        if (adultsAndChildren < 5) this.#quantity.secondItem += 1;
        break;
      case undefined:
        break;
      case false:
        if (this.#quantity.secondItem > 0) this.#quantity.secondItem -= 1;
        break;
      default:
    }
    adultsAndChildren = this.#quantity.firstItem + this.#quantity.secondItem;
    if (adultsAndChildren > 0) {
      switch (this.#quantity.isThirdItem) {
        case true:
          if (this.#quantity.thirdItem < 5) this.#quantity.thirdItem += 1;
          break;
        case undefined:
          break;
        case false:
          if (this.#quantity.thirdItem !== 0) this.#quantity.thirdItem -= 1;
          break;
        default:
      }
    } else this.#quantity.thirdItem = 0;
    this.#quantity.isFirstItem = undefined;
    this.#quantity.isSecondItem = undefined;
    this.#quantity.isThirdItem = undefined;
  }

  #setCaptionGuests() {
    let selectedCaption = '';
    const adultsAndChildren = this.#quantity.firstItem + this.#quantity.secondItem;
    this.#$amount.eq(0).text(this.#quantity.firstItem);
    this.#$amount.eq(1).text(this.#quantity.secondItem);
    this.#$amount.eq(2).text(this.#quantity.thirdItem);
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
        break;
      default:
    }
    switch (this.#quantity.thirdItem) {
      case 1:
        selectedCaption = `${selectedCaption} ${this.#quantity.thirdItem} младенец`;
        break;
      case 2:
      case 3:
      case 4:
        selectedCaption = `${selectedCaption} ${this.#quantity.thirdItem} младенца`;
        break;
      case 5:
        selectedCaption = `${selectedCaption} ${this.#quantity.thirdItem} младенцев`;
        break;
      default:
    }
    this.#$headOut.text(selectedCaption);
  }

  #setDisabledMinus() {
    switch (this.#quantity.firstItem) {
      case 0:
        this.#$minus.eq(0).prop('disabled', true);
        break;
      case 1:
        this.#$minus.eq(0).prop('disabled', false);
        break;
      default:
    }
    switch (this.#quantity.secondItem) {
      case 0:
        this.#$minus.eq(1).prop('disabled', true);
        break;
      case 1:
        this.#$minus.eq(1).prop('disabled', false);
        break;
      default:
    }
    switch (this.#quantity.thirdItem) {
      case 0:
        this.#$minus.eq(2).prop('disabled', true);
        break;
      case 1:
        this.#$minus.eq(2).prop('disabled', false);
        break;
      default:
    }
  }
}

export default DropdownQuantity;
