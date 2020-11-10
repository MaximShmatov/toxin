import '../rate-button/rate-button';
import './img/card-room-350-4.jpg';
import './img/card-room-352-4.jpg';
import './img/card-room-444-4.jpg';
import './img/card-room-450-4.jpg';
import './img/card-room-666-4.jpg';
import './img/card-room-678-4.jpg';
import './img/card-room-740-4.jpg';
import './img/card-room-840-4.jpg';
import './img/card-room-856-4.jpg';
import './img/card-room-888-4.jpg';
import './img/card-room-980-4.jpg';
import './img/card-room-982-4.jpg';
import './card-room.sass';

class CardRoom {
  #$radio;

  constructor($card, room) {
    this.#$radio = $card.find('.js-card-room__slider-radio');
    this.#setHandles($card);
    CardRoom.initCard($card, room);
  }

  static initCard($card, room) {
    const $rate = $card.find('.js-rate-button__radio');
    $rate.eq(room.rate - 1).prop('checked', true);

    const {
      img1, img2, img3, img4,
      alt1, alt2, alt3, alt4,
    } = room;
    const $images = $card.find('.js-card-room__slider-img');
    $images.eq(0).attr('src', img1).attr('alt', alt1);
    $images.eq(1).attr('src', img2).attr('alt', alt2);
    $images.eq(2).attr('src', img3).attr('alt', alt3);
    $images.eq(3).attr('src', img4).attr('alt', alt4);

    const {
      number, level, amount, review,
    } = room;
    $card.find('.js-card-room__price-number').text(number);
    $card.find('.js-card-room__price-level').text(level);
    $card.find('.js-card-room__price-pay-amount').text(amount);
    $card.find('.js-card-room__review-quantity').text(review);
  }

  #setHandles($card) {
    $card.find('.js-card-room__slider-control-right-button').on('click.cardroom', this.#handleButtonRightClick.bind(this));
    $card.find('.js-card-room__slider-control-left-button').on('click.cardroom', this.#handleButtonLeftClick.bind(this));
  }

  #handleButtonRightClick() {
    for (let i = 1; i < 5; i += 1) {
      if (this.#$radio.eq(i).prop('checked')) {
        this.#$radio.eq(i - 1).prop('checked', true);
        this.#$radio.eq(i - 1).attr('data-dir', 'r');
        return;
      }
    }
  }

  #handleButtonLeftClick() {
    for (let i = 0; i < 4; i += 1) {
      if (this.#$radio.eq(i).prop('checked')) {
        this.#$radio.eq(i + 1).prop('checked', true);
        this.#$radio.eq(i + 1).attr('data-dir', 'l');
        return;
      }
    }
  }
}

export default CardRoom;
