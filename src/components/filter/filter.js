import DateFilter from '../date-filter/date-filter';
import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import RangeSlider from '../range-slider/range-slider';

import checkboxRich from '../checkbox-rich/checkbox-rich';
import checkboxRichData from '../checkbox-rich/checkbox-rich.json';

(function ($) {
  const $filter = $('.js-filter');

  const $rangeSlider = $filter.find('.js-range-slider');
  new RangeSlider($rangeSlider);

  const $dateFilter = $filter.find('.js-date-filter');
  new DateFilter($dateFilter.eq(0));

  const $dropdownQuantity = $filter.find('.js-dropdown-quantity');
  new DropdownQuantity($dropdownQuantity.eq(0));
  new DropdownQuantity($dropdownQuantity.eq(1), 'room');

  const $checkboxRich = $filter.find('.js-checkbox-rich');
  checkboxRich($checkboxRich, checkboxRichData);
}(window.$));
