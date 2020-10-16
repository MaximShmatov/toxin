'use strict'

import './slider';
import './range-slider.sass';


class RangeSlider {
  $slider;
  #$range;
  #valueFrom;
  #valueTo;

  constructor($rangeSlider) {
    this.$slider = $rangeSlider.find('.range-slider__plugin').slider('init');
    this.#$range = $rangeSlider.find('.range-slider__title-range');
    this.#valueFrom = this.#getNumberStr(this.$slider.slider('valueFrom'));
    this.#valueTo = this.#getNumberStr(this.$slider.slider('valueTo'));
    this.#$range.text(`${this.#valueFrom}\u20BD - ${this.#valueTo}\u20BD`);

    this.$slider.on('slider-data', this.#handleEventSlider.bind(this));
  }

  #handleEventSlider(evt) {
    if (evt.detail.name === 'valueFrom') {
      this.#valueFrom = this.#getNumberStr(this.$slider.slider('valueFrom'));
    }
    if (evt.detail.name === 'valueTo') {
      this.#valueTo = this.#getNumberStr(this.$slider.slider('valueTo'));
    }
    this.#$range.text(`${this.#valueFrom}\u2009\u20BD - ${this.#valueTo}\u2009\u20BD`);
  }

  #getNumberStr(num) {
    let n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }
}

export default RangeSlider;



