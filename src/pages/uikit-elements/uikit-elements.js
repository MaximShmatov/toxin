import RangeSlider from '../../components/range-slider/range-slider';
import DropdownQuantity from '../../components/dropdown-quantity/dropdown-quantity';
import DateRange from '../../components/date-range/date-range';
import DateFilter from '../../components/date-filter/date-filter';

(function ($) {
  const $uikitElements = $('.js-uikit-elements');

  const $dropdownQuantity = $uikitElements.find('.js-dropdown-quantity');
  new DropdownQuantity($dropdownQuantity.eq(0));
  new DropdownQuantity($dropdownQuantity.eq(1), 'room');
  new DropdownQuantity($dropdownQuantity.eq(2), 'room').togglePicker();
  new DropdownQuantity($dropdownQuantity.eq(3)).togglePicker();
  new DropdownQuantity($dropdownQuantity.eq(4)).togglePicker();

  const $dateRange = $uikitElements.find('.js-date-range');
  new DateRange($dateRange);

  const $dateFilter = $uikitElements.find('.js-date-filter');
  new DateFilter($dateFilter);

  const $rangeSlider = $uikitElements.find('.js-range-slider');
  new RangeSlider($rangeSlider);
}(window.$));
