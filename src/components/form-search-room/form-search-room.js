import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';

(function ($) {
  const $formSearchRoom = $('.js-form-search-room');
  new DateRange($formSearchRoom);
  new DropdownQuantity($formSearchRoom);
}(window.$));
