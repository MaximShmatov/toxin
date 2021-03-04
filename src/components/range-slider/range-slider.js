import '../../vendor/slider';

class RangeSlider {
  $slider;

  #$range;

  #valueFrom;

  #valueTo;

  constructor($rangeSlider) {
    this.#init($rangeSlider);
    this.#setHandles();
  }

  getNumberStr(num) {
    return String(num).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
  }

  #init($rangeSlider) {
    this.$slider = $rangeSlider.find('.js-range-slider__plugin').slider('init');
    this.#$range = $rangeSlider.find('.js-range-slider__title-range');
    this.#valueFrom = this.getNumberStr(this.$slider.slider('valueFrom'));
    this.#valueTo = this.getNumberStr(this.$slider.slider('valueTo'));
    this.#$range.text(`${this.#valueFrom}\u20BD - ${this.#valueTo}\u20BD`);
  }

  #setHandles() {
    this.$slider.on('slider-data', this.#handlePluginSliderData.bind(this));
  }

  #handlePluginSliderData(evt) {
    if (evt.detail.name === 'valueFrom') {
      this.#valueFrom = this.getNumberStr(this.$slider.slider('valueFrom'));
    }
    if (evt.detail.name === 'valueTo') {
      this.#valueTo = this.getNumberStr(this.$slider.slider('valueTo'));
    }
    this.#$range.text(`${this.#valueFrom}\u2009\u20BD - ${this.#valueTo}\u2009\u20BD`);
  }
}

export default RangeSlider;
