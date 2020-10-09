'use strict'

import {RangeSlider} from '../range-slider/range-slider';
import {DateFilter} from '../date-filter/date-filter';
import {DropdownQuantity} from '../dropdown-quantity/dropdown-quantity';
import {CheckboxList} from '../checkbox-list/checkbox-list';
import '../checkbox/checkbox';
import '../checkbox-rich/checkbox-rich';
import './filter.sass';


let $filter = $('.filter');
let $rangeSlider = $filter.find('.range-slider');
let $dateFilter = $filter.find('.date-filter');
let $dropdownQuantity = $filter.find('.dropdown-quantity');
let $checkboxList = $filter.find('.checkbox-list');

new DateFilter($($dateFilter[0]));
new RangeSlider($rangeSlider);
new DropdownQuantity($($dropdownQuantity[0]));
new DropdownQuantity($($dropdownQuantity[1]), 'room');
new CheckboxList($($checkboxList[0]));