import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';

(function ($) {
  const $formSearchRoom = $('.js-form-search-room');

  const $dateRange = $formSearchRoom.find('.js-date-range');
  new DateRange($dateRange);

  const $dropdown = $formSearchRoom.find('.js-dropdown-quantity');
  new DropdownQuantity($dropdown);
}(window.$));