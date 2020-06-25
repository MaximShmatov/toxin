'use strict'

import './review.sass';
import {Like} from "../like/like";

export class Review {
  constructor (review, $review) {
    new Like($review.find('.like')).likes = 12;
    $review.find('.review__avatar-portrait').attr('src', review.avatar);
    $review.find('.review__quote-author-name').text(review.name);
    $review.find('.review__quote-author-date').text(review.date);
    $review.find('.review__quote-text').text(review.text);
  }
}