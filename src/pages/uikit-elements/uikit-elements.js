import bulletList from '../../components/bullet-list/bullet-list';
import bulletListData from '../../components/bullet-list/bullet-list.json';

import review from '../../components/review/review';
import reviewData from '../../components/review/review.json';

import info from '../../components/info/info';
import infoData from '../../components/info/info.json';

import checkboxRich from '../../components/checkbox-rich/checkbox-rich';
import checkboxRichData from '../../components/checkbox-rich/checkbox-rich.json';

import RangeSlider from '../../components/range-slider/range-slider';
import DropdownQuantity from '../../components/dropdown-quantity/dropdown-quantity';
import DateRange from '../../components/date-range/date-range';
import DateFilter from '../../components/date-filter/date-filter';

(function ($) {
  const $uikitElements = $('.js-uikit-elements');

  const $component = $uikitElements.find('.js-bullet-list__items');
  bulletList($component, bulletListData[0]);

  const $review = $uikitElements.find('.js-review');
  review($review.eq(0), reviewData[0]);

  const $info = $uikitElements.find('.js-info');
  info($info.eq(0), infoData[0]);
  info($info.eq(1), infoData[1]);

  const $checkboxRich = $uikitElements.find('.js-checkbox-rich');
  checkboxRich($checkboxRich, checkboxRichData);

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
