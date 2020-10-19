'use strict'

import '../rate-button/rate-button';
import './350/card-room-350-4.jpg';
import './352/card-room-352-4.jpg';
import './444/card-room-444-4.jpg';
import './450/card-room-450-4.jpg';
import './666/card-room-666-4.jpg';
import './678/card-room-678-4.jpg';
import './740/card-room-740-4.jpg';
import './840/card-room-840-4.jpg';
import './856/card-room-856-4.jpg';
import './888/card-room-888-4.jpg';
import './980/card-room-980-4.jpg';
import './982/card-room-982-4.jpg';
import './card-room.sass';

class CardRoom {
  #$radio;

  constructor($card, room) {
    this.#$radio = $card.find('.card-room__slider-radio');
    const $images = $card.find('.card-room__slider-img');
    const $rate = $card.find('.rate-button__radio');

    $rate.eq(room.rate - 1).prop('checked', true);

    $images.eq(0).attr('src', room.img1).attr('alt', room.alt);
    $images.eq(1).attr('src', room.img2).attr('alt', room.alt);
    $images.eq(2).attr('src', room.img3).attr('alt', room.alt);
    $images.eq(3).attr('src', room.img4).attr('alt', room.alt);
    $card.find('.card-room__price-number').text(room.number);
    $card.find('.card-room__price-level').text(room.level);
    $card.find('.card-room__price-pay-amount').text(room.amount);
    $card.find('.card-room__review-quantity').text(room.review);

    $card.find('.card-room__slider-control-right-button').on('click', this.listRight.bind(this));
    $card.find('.card-room__slider-control-left-button').on('click', this.listLeft.bind(this));
  }

  listRight() {
    for (let i = 1; i < 5; i++) {
      if (this.#$radio.eq(i).prop('checked')) {
        this.#$radio.eq(i - 1).prop('checked', true);
        this.#$radio.eq(i - 1).attr('data-dir', 'r');
        return;
      }
    }
  }

  listLeft() {
    for (let i = 0; i < 4; i++) {
      if (this.#$radio.eq(i).prop('checked')) {
        this.#$radio.eq(i + 1).prop('checked', true);
        this.#$radio.eq(i + 1).attr('data-dir', 'l');
        return;
      }
    }
  }
}

export default CardRoom;