import RangeSlider from '../../components/range-slider/range-slider';
import DropdownQuantity from '../../components/dropdown-quantity/dropdown-quantity';
import DateRange from '../../components/date-range/date-range';
import DateFilter from '../../components/date-filter/date-filter';

(function ($) {
  const $uikitElements = $('.js-uikit-elements');

  const $elements = $uikitElements.find('.js-uikit-elements__sector-element');
  new DropdownQuantity($elements.eq(0));
  new DropdownQuantity($elements.eq(1), 'room');
  new DropdownQuantity($elements.eq(2), 'room').togglePicker();
  new DropdownQuantity($elements.eq(3)).togglePicker();
  new DropdownQuantity($elements.eq(4)).togglePicker();

  new DateRange($uikitElements);
  new DateFilter($uikitElements);
  new RangeSlider($uikitElements);
}(window.$));
