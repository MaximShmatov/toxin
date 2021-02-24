import RangeSlider from '../../components/range-slider/range-slider';
import DropdownQuantity from '../../components/dropdown-quantity/dropdown-quantity';
import DateRange from '../../components/date-range/date-range';
import DateFilter from '../../components/date-filter/date-filter';

class UikitElements {
  #$elements;

  constructor($component) {
    this.#$elements = $component
      .find('.js-uikit-elements__sector-element');
    this.#init();
  }

  #init() {
    new DropdownQuantity(this.#$elements.eq(0));
    new DateRange(this.#$elements.eq(1));
    new DateFilter(this.#$elements.eq(2));
    new RangeSlider(this.#$elements.eq(3));
    new DropdownQuantity(this.#$elements.eq(4), 'room');
    new DropdownQuantity(this.#$elements.eq(5), 'room').togglePicker();
    new DropdownQuantity(this.#$elements.eq(6)).togglePicker();
    new DropdownQuantity(this.#$elements.eq(7)).togglePicker();
  }
}

export default UikitElements;
