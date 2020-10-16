'use strict'

import DateFilter from '../date-filter/date-filter';
import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import RangeSlider from '../range-slider/range-slider';
import '../checkbox-group/checkbox-group';
import '../checkbox-rich/checkbox-rich';
import '../checkbox-list/checkbox-list';
import './filter.sass';


let $filter = $('.filter');
let $rangeSlider = $filter.find('.range-slider');
let $dateFilter = $filter.find('.date-filter');
let $dropdownQuantity = $filter.find('.dropdown-quantity');

new DateFilter($dateFilter.eq(0));
new RangeSlider($rangeSlider);
new DropdownQuantity($dropdownQuantity.eq(0));
new DropdownQuantity($dropdownQuantity.eq(1), 'room');