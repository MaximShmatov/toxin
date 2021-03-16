import DropdownQuantity from '../../components/dropdown-quantity/dropdown-quantity';
import DateRange from '../../components/date-range/date-range';
import DateFilter from '../../components/date-filter/date-filter';
import RangeSlider from '../../components/range-slider/range-slider';

(function ($) {
  new DropdownQuantity($('.js-uikit-elements__sector-dropdown'));
  new DateRange($('.js-uikit-elements__sector-date-range'));
  new DateFilter($('.js-uikit-elements__sector-date-filter'));
  new RangeSlider($('.js-uikit-elements__sector-slider'));
  new DropdownQuantity($('.js-uikit-elements__sector-dropdown-default'));
  new DropdownQuantity($('.js-uikit-elements__sector-dropdown-expanded')).togglePicker();
  const [first, second] = $('.js-uikit-elements__sector-dropdown-guests');
  new DropdownQuantity($(first)).togglePicker();
  new DropdownQuantity($(second)).togglePicker();
}($));
