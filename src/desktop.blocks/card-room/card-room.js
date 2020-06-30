'use strict'

import {RateButton} from "../rate-button/rate-button";
import './card-room.sass';

export class CardRoom {
  #$radio = [];

  constructor($card, room) {
    this.#$radio = $card.find('.card-room__slider-radio');

    let $images = $card.find('.card-room__slider-img');
    let $rate = $card.find('.rate-button');

    new RateButton($rate, room.rate);
    $($images[0]).attr('src', room.img1);
    $($images[1]).attr('src', room.img2);
    $($images[2]).attr('src', room.img3);
    $($images[3]).attr('src', room.img4);
    $card.find('.card-room__price-number').text(room.number);
    $card.find('.card-room__price-level').text(room.level);
    $card.find('.card-room__price-pay-amount').text(room.amount);
    $card.find('.card-room__review-quantity').text(room.review);
    $card.find('.card-room__slider-control-right-button').on('click', this.listRight.bind(this));
    $card.find('.card-room__slider-control-left-button').on('click', this.listLeft.bind(this));
  }

  listRight() {
    for(let i = 0; i <5; i++) {
      if($(this.#$radio[i]).prop('checked')) {
        $(this.#$radio[i-1]).prop('checked', true);
        $(this.#$radio[i-1]).attr('data-dir', 'r')
        break;
      }
    }
  }
  listLeft() {
    for(let i = 0; i <5; i++) {
      if($(this.#$radio[i]).prop('checked')) {
        $(this.#$radio[i+1]).prop('checked', true);
        $(this.#$radio[i+1]).attr('data-dir', 'l');
        break;
      }
    }
  }
}