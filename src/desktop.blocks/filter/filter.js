'use strict'

import './filter.sass';
import {DateFilter} from "../date-filter/date-filter";
import {DropdownQuantity} from "../dropdown-quantity/dropdown-quantity";
import '../checkbox/checkbox';
import '../checkbox-rich/checkbox-rich';
import {CheckboxList} from "../checkbox-list/checkbox-list";



let $filter = $('.filter');
let $dateFilter = $filter.find('.date-filter');
let $dropdownQuantity = $filter.find('.dropdown-quantity');
let $checkboxList = $filter.find('.checkbox-list');

new DateFilter($($dateFilter[0]));
new DropdownQuantity($($dropdownQuantity[0]));
new DropdownQuantity($($dropdownQuantity[1]), 'room');
new CheckboxList($($checkboxList[0]));