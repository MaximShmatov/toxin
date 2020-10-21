'use strict'

import DateFilter from '../date-filter/date-filter';
import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import RangeSlider from '../range-slider/range-slider';
import '../checkbox-group/checkbox-group';
import '../checkbox-rich/checkbox-rich';
import '../checkbox-list/checkbox-list';
import './filter.sass';

(function ($) {
  const $filter = $('.js-filter');

  const $rangeSlider = $filter.find('.js-range-slider');
  new RangeSlider($rangeSlider);

  const $dateFilter = $filter.find('.js-date-filter');
  new DateFilter($dateFilter.eq(0));

  const $dropdownQuantity = $filter.find('.js-dropdown-quantity');
  new DropdownQuantity($dropdownQuantity.eq(0));
  new DropdownQuantity($dropdownQuantity.eq(1), 'room');
})(window.$);
