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

  const $elements = $uikitElements.find('.js-uikit-elements__sector-element');
  new DropdownQuantity($elements.eq(0));
  new DropdownQuantity($elements.eq(1), 'room');
  new DropdownQuantity($elements.eq(2), 'room').togglePicker();
  new DropdownQuantity($elements.eq(5)).togglePicker();
  new DropdownQuantity($elements.eq(6)).togglePicker();
  info($elements.eq(7), infoData[0]);
  info($elements.eq(8), infoData[1]);

  bulletList($uikitElements, bulletListData[0]);
  review($uikitElements, reviewData[0]);
  new DateRange($uikitElements);
  new DateFilter($uikitElements);
  new RangeSlider($uikitElements);
}(window.$));
