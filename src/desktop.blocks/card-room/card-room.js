'use strict'

import('../rate-button/rate-button');
import('./card-room.sass');

import img1 from './888/card-room__carousel-888-1.jpg';
import img2 from './888/card-room__carousel-888-2.jpg';
import img3 from './888/card-room__carousel-888-3.jpg';
import img4 from './888/card-room__carousel-888-4.jpg';

let room = {
  image1: img1,
  image2: img2,
  image3: img3,
  image4: img4,
  number: 888,
  level: 'люкс',
  amount: '9 990',
  review: 145
}

export class CardRoom {
  #$images = [];
  #$number;
  #$level;
  #$amount;
  #$review;
  #$radio = [];

  constructor(room, $card) {
    this.#$images = $card.find('.card-room__slider-img');
    $(this.#$images[0]).attr('src', room.image1);
    $(this.#$images[1]).attr('src', room.image2);
    $(this.#$images[2]).attr('src', room.image3);
    $(this.#$images[3]).attr('src', room.image4);
    this.#$number = $card.find('.card-room__price-number').text(room.number);
    this.#$level = $card.find('.card-room__price-level').text(room.level);
    this.#$amount = $card.find('.card-room__price-amount').text(room.amount);
    this.#$review = $card.find('.card-room__review-quantity').text(room.review);
    this.#$radio = $card.find('.card-room__slider-radio').text(room.review);
    $card.find('.card-room__slider-control-right-button').on('click', this.listRight.bind(this));
    $card.find('.card-room__slider-control-left-button').on('click', this.listLeft.bind(this));
    //return this
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

new CardRoom(room, $($('.card-room')[0]));
new CardRoom(room, $($('.card-room')[1]));
new CardRoom(room, $($('.card-room')[2]));
new CardRoom(room, $($('.card-room')[3]));