class CardRoom {
  #$radio;

  #$leftButtons;

  #$rightButtons;

  constructor($component) {
    this.#$radio = $component
      .find('.js-card-room__slider-radio');
    this.#$leftButtons = $component
      .find('.js-card-room__slider-control-left-button');
    this.#$rightButtons = $component
      .find('.js-card-room__slider-control-right-button');
    this.#setHandlers();
  }

  #setHandlers() {
    this.#$leftButtons.on('click.cardroom', this.#handleButtonLeftClick.bind(this));
    this.#$rightButtons.on('click.cardroom', this.#handleButtonRightClick.bind(this));
  }

  #handleButtonLeftClick() {
    this.#$radio.each((index, item) => {
      if (window.$(item).prop('checked')) {
        this.#$radio.eq(index + 1).prop('checked', true);
        this.#$radio.eq(index + 1).attr('data-direction', 'left');
        return false;
      }
      return true;
    });
  };

  #handleButtonRightClick() {
    this.#$radio.each((index, item) => {
      if (window.$(item).prop('checked') && index > 0) {
        this.#$radio.eq(index - 1).prop('checked', true);
        this.#$radio.eq(index - 1).attr('data-direction', 'right');
        return false;
      }
      return true;
    });
  };
}

export default CardRoom;
