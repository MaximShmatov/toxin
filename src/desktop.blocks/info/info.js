'use strict'

import './info.sass';

export class Info {
  #info = {
    img: 'img/undefined.jpg',
    alt: 'undefined',
    term: 'undefined',
    definition: 'undefined'
  }
  constructor ($info, info) {
    if(info) this.#info = info;
    $info.find('.info__img').attr({'src': this.#info.img, 'alt': this.#info.alt});
    $info.find('.info__item-term').text(this.#info.term);
    $info.find('.info__item-definition').text(this.#info.definition);
  }
}