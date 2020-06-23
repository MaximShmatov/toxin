'use strict'

import './like.sass';

export class Like {
  #$like;
  #$checkbox;
  #$outLike;
  #likes;

  constructor($element) {
    this.#$like = $element;
    this.#likes = $element.text();
    this.#$checkbox = $element.find('.like__true');
    this.#$outLike = $element.find('.like__false-quantity');
    $(this.#$checkbox).on('change', this.#addLike.bind(this));
  }

  #addLike() {
    if (this.#$checkbox.is(':checked')) {
      this.#likes = ++this.#likes;
    } else {
      this.#likes = --this.#likes;
    }
    this.#$outLike.text(this.#likes);
  }
  get likes() {
    return this.#likes;
  }
  set likes(likes) {
    this.#likes = likes;
  }
}