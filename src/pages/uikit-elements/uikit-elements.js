import RangeSlider from '../../components/range-slider/range-slider';
import DropdownQuantity from '../../components/dropdown-quantity/dropdown-quantity';
import DateRange from '../../components/date-range/date-range';
import DateFilter from '../../components/date-filter/date-filter';
import '../../components/rate-button/rate-button';
import '../../components/checkbox-list/checkbox-list';
import '../../components/text-field/text-field';
import '../../components/subscription/subscription';
import '../../components/checkbox-group/checkbox-group';
import '../../components/radio/radio';
import '../../components/toggle/toggle';
import '../../components/button/button';
import '../../components/pagination/pagination';
import '../../components/checkbox-rich/checkbox-rich';
import '../../components/bullet-list/bullet-list';
import '../../components/info/info';
import '../../components/review/review';
import '../../templates/template-uikit/template-uikit';
import './uikit-elements.sass';

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
