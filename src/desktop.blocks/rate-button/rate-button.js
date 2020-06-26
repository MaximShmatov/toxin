'use strict'

import './rate-button.sass';

export class RateButton {
  constructor($rate, rate = 4) {
    $($rate.find('.rate-button__radio')[rate-1]).prop('checked', true);
  }
}