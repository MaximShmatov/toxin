import DateFilter from '../date-filter/date-filter';
import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import RangeSlider from '../range-slider/range-slider';

(function ($) {
  const $filter = $('.js-filter');

  new DateFilter($filter);
  const $guests = $filter.find('.js-filter__guests');
  new DropdownQuantity($guests);
  const $comfort = $filter.find('.js-filter__comfort');
  new DropdownQuantity($comfort, 'room');
  new RangeSlider($filter);
}(window.$));
