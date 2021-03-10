import itemsRoomAndGuests from './dropdown-quantity.json';

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

  #mode;

  #quantity = {
    firstItem: 0,
    secondItem: 0,
    thirdItem: 0,
    isFirstItem: undefined,
    isSecondItem: undefined,
    isThirdItem: undefined,
  }

  #itemsData;

  constructor($component, mode) {
    this.#init($component);
    this.#initMode(mode);
    this.#setHandles();
  }

  togglePicker() {
    this.#$picker.toggleClass('dropdown-quantity__picker_hidden');
  }

  #init($component) {
    this.#$dropdown = $component.find('.js-dropdown-quantity');
    this.#$header = $component.find('.js-dropdown-quantity__head');
    this.#$itemHeader = $component.find('.js-dropdown-quantity__picker-item-header');
    this.#$headOut = $component.find('.js-dropdown-quantity__head-out');
    this.#$picker = $component.find('.js-dropdown-quantity__picker');
    this.#$minus = $component.find('.js-dropdown-quantity__picker-item-quantity-minus');
    this.#$plus = $component.find('.js-dropdown-quantity__picker-item-quantity-plus');
    this.#$amount = $component.find('.js-dropdown-quantity__picker-item-quantity-amount');
    this.#$clear = $component.find('.js-dropdown-quantity__picker-item-clear');
    this.#$submit = $component.find('.js-dropdown-quantity__picker-item-submit');
    this.togglePicker();
  }

  #initMode(mode) {
    this.#mode = mode;
    if (mode === 'room') {
      this.#itemsData = itemsRoomAndGuests.room;
      this.#$picker.find('.js-dropdown-quantity__picker-item').hide();
      this.#setValidQuantity = this.#setValidRoom;
    } else {
      this.#itemsData = itemsRoomAndGuests.guests;
      this.#setValidQuantity = this.#setValidGuests;
    }
    this.#$headOut.text(this.#itemsData.title);
    const { itemNames } = this.#itemsData;
    this.#$itemHeader.eq(0).text(itemNames[0]);
    this.#$itemHeader.eq(1).text(itemNames[1]);
    this.#$itemHeader.eq(2).text(itemNames[2]);
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
    $(document).on('mouseup.dropdownquantity', this.#handleDocumentClick.bind(this));
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

  #setValidRoom() {
    switch (this.#quantity.isFirstItem) {
      case true:
        if (this.#quantity.firstItem < 5) {
          this.#quantity.firstItem += 1;
        }
        break;
      case undefined:
        break;
      case false:
        if (this.#quantity.firstItem > 0) {
          this.#quantity.firstItem -= 1;
        }
        break;
      default:
    }
    if (this.#quantity.firstItem > 0) {
      switch (this.#quantity.isSecondItem) {
        case true:
          if (this.#quantity.secondItem < 5) {
            this.#quantity.secondItem += 1;
          }
          break;
        case undefined:
          break;
        case false:
          if (this.#quantity.secondItem > 0) {
            this.#quantity.secondItem -= 1;
          }
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
          if (this.#quantity.thirdItem < 5) {
            this.#quantity.thirdItem += 1;
          }
          break;
        case undefined:
          break;
        case false:
          if (this.#quantity.thirdItem !== 0) {
            this.#quantity.thirdItem -= 1;
          }
          break;
        default:
      }
    } else {
      this.#quantity.thirdItem = 0;
    }
    this.#quantity.isFirstItem = undefined;
    this.#quantity.isSecondItem = undefined;
    this.#quantity.isThirdItem = undefined;
  }

  #setValidGuests() {
    let adultsAndChildren = this.#quantity.firstItem + this.#quantity.secondItem;
    switch (this.#quantity.isFirstItem) {
      case true:
        if (adultsAndChildren < 5) {
          this.#quantity.firstItem += 1;
        }
        break;
      case undefined:
        break;
      case false:
        if (this.#quantity.firstItem > 0) {
          this.#quantity.firstItem -= 1;
        }
        break;
      default:
    }
    adultsAndChildren = this.#quantity.firstItem + this.#quantity.secondItem;
    switch (this.#quantity.isSecondItem) {
      case true:
        if (adultsAndChildren < 5) {
          this.#quantity.secondItem += 1;
        }
        break;
      case undefined:
        break;
      case false:
        if (this.#quantity.secondItem > 0) {
          this.#quantity.secondItem -= 1;
        }
        break;
      default:
    }
    adultsAndChildren = this.#quantity.firstItem + this.#quantity.secondItem;
    if (adultsAndChildren > 0) {
      switch (this.#quantity.isThirdItem) {
        case true:
          if (this.#quantity.thirdItem < 5) {
            this.#quantity.thirdItem += 1;
          }
          break;
        case undefined:
          break;
        case false:
          if (this.#quantity.thirdItem !== 0) {
            this.#quantity.thirdItem -= 1;
          }
          break;
        default:
      }
    } else {
      this.#quantity.thirdItem = 0;
    }
    this.#quantity.isFirstItem = undefined;
    this.#quantity.isSecondItem = undefined;
    this.#quantity.isThirdItem = undefined;
  }

  #setCaption() {
    let selectedCaption = '';
    let firstItemQuantity;
    let secondItemQuantity;
    if (this.#mode === 'room') {
      firstItemQuantity = this.#quantity.firstItem;
      secondItemQuantity = this.#quantity.secondItem;
    } else {
      firstItemQuantity = this.#quantity.firstItem + this.#quantity.secondItem;
      secondItemQuantity = this.#quantity.thirdItem;
    }
    this.#$amount.eq(0).text(this.#quantity.firstItem);
    this.#$amount.eq(1).text(this.#quantity.secondItem);
    this.#$amount.eq(2).text(this.#quantity.thirdItem);
    const { variants } = this.#itemsData;
    switch (firstItemQuantity) {
      case 0:
        this.#$clear.css('visibility', 'hidden');
        selectedCaption = this.#itemsData.title;
        break;
      case 1:
        this.#$clear.css('visibility', 'visible');
        selectedCaption = `${firstItemQuantity} ${variants[0]}`;
        break;
      case 2:
      case 3:
      case 4:
        selectedCaption = `${firstItemQuantity} ${variants[1]}`;
        break;
      case 5:
        selectedCaption = `${firstItemQuantity} ${variants[2]}`;
        break;
      default:
    }
    switch (secondItemQuantity) {
      case 1:
        selectedCaption = `${selectedCaption} ${secondItemQuantity} ${variants[3]}`;
        break;
      case 2:
      case 3:
      case 4:
        selectedCaption = `${selectedCaption} ${secondItemQuantity} ${variants[4]}`;
        break;
      case 5:
        selectedCaption = `${selectedCaption} ${secondItemQuantity} ${variants[5]}`;
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
