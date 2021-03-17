import DateFilter from '../date-filter/date-filter';
import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import RangeSlider from '../range-slider/range-slider';

class Filter {
  #$filter;

  #$guests;

  #$comfort;

  constructor($component) {
    this.#init($component);
  }

  #init($component) {
    this.#$filter = $component;
    this.#$guests = $component.find('.js-filter__guests');
    this.#$comfort = $component.find('.js-filter__comfort');
    new DateFilter(this.#$filter);
    new RangeSlider(this.#$filter);
    new DropdownQuantity(this.#$guests);
    new DropdownQuantity(this.#$comfort);
  }
}

export default Filter;
