import RangeSlider from '../../components/range-slider/range-slider';
import DropdownQuantity from '../../components/dropdown-quantity/dropdown-quantity';
import DateRange from '../../components/date-range/date-range';
import DateFilter from '../../components/date-filter/date-filter';

class UikitElements {
  constructor($component) {
    this.#init($component);
  }

  #init($component) {
    const $elements = $component.find('.js-uikit-elements__sector-element');
    new DropdownQuantity($elements.eq(0));
    new DateRange($elements.eq(1));
    new DateFilter($elements.eq(2));
    new RangeSlider($elements.eq(3));
    new DropdownQuantity($elements.eq(4), 'room');
    new DropdownQuantity($elements.eq(5), 'room').togglePicker();
    new DropdownQuantity($elements.eq(6)).togglePicker();
    new DropdownQuantity($elements.eq(7)).togglePicker();
  }
}

export default UikitElements;
