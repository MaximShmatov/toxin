'use strict'

import {RateButton} from "../rate-button/rate-button";
import './card-room.sass';

export class CardRoom {
  #$radio;

  constructor($card, room) {
    this.#$radio = $card.find('.card-room__slider-radio');
    const $images = $card.find('.card-room__slider-img');
    const $rate = $card.find('.rate-button');
    new RateButton($rate, room.rate);

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