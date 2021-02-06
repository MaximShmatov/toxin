import checkboxList from '../../components/checkbox-list/checkbox-list';
import checkboxListData from '../../components/checkbox-list/checkbox-list.json';

import checkboxGroup from '../../components/checkbox-group/checkbox-group';
import checkboxGroupData from '../../components/checkbox-group/checkbox-group.json';

import bulletList from '../../components/bullet-list/bullet-list';
import bulletListData from '../../components/bullet-list/bullet-list.json';

import review from '../../components/review/review';
import reviewData from '../../components/review/review.json';

import info from '../../components/info/info';
import infoData from '../../components/info/info.json';

import RangeSlider from '../../components/range-slider/range-slider';
import DropdownQuantity from '../../components/dropdown-quantity/dropdown-quantity';
import DateRange from '../../components/date-range/date-range';
import DateFilter from '../../components/date-filter/date-filter';

(function ($) {
  const $uikitElements = $('.js-uikit-elements');

  const $checkboxList = $uikitElements.find('.js-checkbox-list');
  checkboxList($checkboxList.eq(0), checkboxListData);
  checkboxList($checkboxList.eq(1), checkboxListData);

  const $checkboxGroup = $uikitElements.find('.js-checkbox-group');
  checkboxGroup($checkboxGroup, checkboxGroupData);

  const $component = $uikitElements.find('.js-bullet-list');
  bulletList($component, bulletListData[0]);

  const $review = $uikitElements.find('.js-review');
  review($review.eq(0), reviewData[0]);

  const $info = $uikitElements.find('.js-info');
  info($info.eq(0), infoData[0]);
  info($info.eq(1), infoData[1]);

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
