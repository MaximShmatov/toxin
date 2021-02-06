import DateFilter from '../date-filter/date-filter';
import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import RangeSlider from '../range-slider/range-slider';

import checkboxGroup from '../checkbox-group/checkbox-group';
import checkboxGroupData from '../checkbox-group/checkbox-group.json';

import checkboxList from '../checkbox-list/checkbox-list';
import checkboxListData from '../checkbox-list/checkbox-list.json';

(function ($) {
  const $filter = $('.js-filter');

  const $dateFilter = $filter.find('.js-date-filter');
  new DateFilter($dateFilter.eq(0));

  const $dropdownQuantity = $filter.find('.js-dropdown-quantity');
  new DropdownQuantity($dropdownQuantity.eq(0));
  new DropdownQuantity($dropdownQuantity.eq(1), 'room');

  const $rangeSlider = $filter.find('.js-range-slider');
  new RangeSlider($rangeSlider);

  const $checkboxGroup = $filter.find('.js-checkbox-group');
  checkboxGroup($checkboxGroup, checkboxGroupData);

  const $checkboxList = $filter.find('.js-checkbox-list');
  checkboxList($checkboxList, checkboxListData);
}(window.$));

function filter($component, data) {
  const {
    dateTitle,
    guestsTitle,
    priceTitle,
    priceCaption,
    rulesTitle,
    availabilityTitle,
    comfortTitle,
    comfortTitleOther,
  } = data;

  $component.find('.js-date-filter__title').text(dateTitle);
  $component.find('.js-dropdown-quantity__title').text(guestsTitle);
  $component.find('.js-range-slider__title').text(priceTitle);
  $component.find('.js-range-slider__info').text(priceCaption);
  $component.find('.js-checkbox-group__title').text(rulesTitle);
  $component.find('.js-checkbox-rich__title').text(availabilityTitle);
  $component.find('.js-dropdown-quantity__title').text(comfortTitle);
  $component.find('.js-checkbox-list__body-title').text(comfortTitleOther);
}

export default filter;