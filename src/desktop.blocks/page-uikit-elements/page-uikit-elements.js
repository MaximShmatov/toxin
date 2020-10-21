'use strict'

import RangeSlider from '../range-slider/range-slider';
import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';
import DateFilter from '../date-filter/date-filter';
import '../rate-button/rate-button';
import '../checkbox-list/checkbox-list';
import '../text-field/text-field';
import '../subscription/subscription';
import '../checkbox-group/checkbox-group';
import '../radio/radio';
import '../toggle/toggle';
import '../button/button';
import '../pagination/pagination';
import '../checkbox-rich/checkbox-rich';
import '../bullet-list/bullet-list';
import '../info/info';
import '../review/review';
import '../template-uikit/template-uikit';
import './page-uikit-elements.sass';


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
})(window.$);

