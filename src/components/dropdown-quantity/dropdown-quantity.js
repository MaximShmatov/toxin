class DropdownQuantity {
  #$body;

  #$bodyCaption;

  #bodyCaption;

  #$picker;

  #$itemsActions;

  #$pickerActions;

  #$clear;

  #$submit;

  constructor($component) {
    this.#init($component);
    this.#setHandles();
  }

  togglePicker() {
    this.#$picker.toggleClass('dropdown-quantity__picker_hidden');
  }

  #init($component) {
    this.#$body = $component.find('.js-dropdown-quantity__body');
    this.#$bodyCaption = $component.find('.js-dropdown-quantity__body-caption');
    this.#bodyCaption = this.#$bodyCaption.text();
    this.#$picker = $component.find('.js-dropdown-quantity__picker');
    this.#$itemsActions = $component.find('.js-dropdown-quantity__picker-item-actions');
    this.#$pickerActions = $component.find('.js-dropdown-quantity__picker-actions');
    this.#$clear = $component.find('.js-dropdown-quantity__picker-actions-clear');
    this.#$submit = $component.find('.js-dropdown-quantity__picker-actions-submit');
    this.#$clear.css('visibility', 'hidden');
    this.togglePicker();
  }

  #setHandles() {
    this.#$body.on('click.dropdownquantity', this.#handleBodyClick.bind(this));
    this.#$itemsActions.on('click.dropdownquantity', this.#handleItemsActionsClick.bind(this));
    this.#$clear.on('click.dropdownquantity', this.#handleClearClick.bind(this));
    this.#$submit.on('click.dropdownquantity', this.#handleSubmitClick.bind(this));
    $(document).on('mouseup.dropdownquantity', this.#handleDocumentClick.bind(this));
  }

  #handleBodyClick() {
    this.togglePicker();
  }

  #handleItemsActionsClick(evt) {
    const $counter = $(evt.currentTarget).find('.js-dropdown-quantity__picker-item-actions-counter');
    const $decrement = $(evt.currentTarget).find('.js-dropdown-quantity__picker-item-actions-decrement');
    let counter = Number($counter.text());
    if (evt.target.value === '-') {
      $counter.text(counter -= 1);
    } else {
      $counter.text(counter += 1);
    }
    if (counter <= 0) {
      $decrement.prop('disabled', true);
    } else {
      $decrement.prop('disabled', false);
    }
    this.#setCaption();
  }

  #handleClearClick() {
    this.#$itemsActions.each(function () {
      $(this).find('.js-dropdown-quantity__picker-item-actions-counter').text('0');
      $(this).find('.js-dropdown-quantity__picker-item-actions-decrement').prop('disabled', true);
    });
    this.#setCaption();
  }

  #handleSubmitClick() {
    this.togglePicker();
  }

  #handleDocumentClick(evt) {
    if (!evt.target.closest('.js-dropdown-quantity')) {
      this.#$picker.addClass('dropdown-quantity__picker_hidden');
    }
  }

  #setCaption() {
    let caption = '';
    let amount = 0;
    const variants = this.#$body.attr('data-variants') ? JSON.parse(this.#$body.attr('data-variants')) : null;
    this.#$itemsActions.each(function () {
      const counter = $(this).find('.js-dropdown-quantity__picker-item-actions-counter').text();
      amount += Number(counter);
      const variantsItem = $(this).attr('data-variants') ? JSON.parse($(this).attr('data-variants')) : null;
      if (variantsItem && counter !== '0') {
        switch (counter) {
          case '1':
            caption += `, ${counter} ${variantsItem[0]}`;
            break;
          case '2':
          case '3':
          case '4':
            caption += `, ${counter} ${variantsItem[1]}`;
            break;
          case '5':
            caption += `, ${counter} ${variantsItem[2]}`;
            break;
          default:
            caption += `, ${counter} ${variantsItem[2]}`;
        }
      }
    });
    if (variants) {
      switch (amount) {
        case 0:
          this.#$clear.css('visibility', 'hidden');
          break;
        case 1:
          caption = `${amount} ${variants[0]}${caption}`;
          this.#$clear.css('visibility', 'visible');
          break;
        case 2:
        case 3:
        case 4:
          caption = `${amount} ${variants[1]}${caption}`;
          break;
        case 5:
          caption = `${amount} ${variants[2]}${caption}`;
          break;
        default:
          caption = `${amount} ${variants[2]}${caption}`;
      }
    } else {
      caption = caption.slice(caption.indexOf(' '));
    }
    this.#$bodyCaption.text((amount === 0) ? this.#bodyCaption : caption);
  }
}

export default DropdownQuantity;
