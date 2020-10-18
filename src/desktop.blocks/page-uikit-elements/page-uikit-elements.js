'use strict'

import RangeSlider from '../range-slider/range-slider';
import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';
import DateFilter from '../date-filter/date-filter';
import RateButton from '../rate-button/rate-button';
import '../checkbox-list/checkbox-list';
import '../text-field/text-field';
import '../subscription/subscription';
import '../checkbox-group/checkbox-group';
import '../radio/radio';
import '../toggle/toggle';
import '../button/button';
import '../pagination/pagination';
import '../checkbox-rich/checkbox-rich';
import '../bullet-list/bullet-list';
import '../template-uikit/template-uikit';
import '../info/info';
import '../review/review';
import './page-uikit-elements.sass';


let $uikitElements = $('.uikit-elements');
let $dropdownQuantity = $uikitElements.find('.dropdown-quantity');
let $rangeSlider = $uikitElements.find('.range-slider');
let $dateRange = $uikitElements.find('.date-range');
let $dateFilter = $uikitElements.find('.date-filter');

new DropdownQuantity($dropdownQuantity.eq(0));
new DateRange($dateRange);
new DateFilter($dateFilter);
new RangeSlider($rangeSlider);
new DropdownQuantity($dropdownQuantity.eq(1), 'room');
new DropdownQuantity($dropdownQuantity.eq(2), 'room').togglePicker();
new DropdownQuantity($dropdownQuantity.eq(3)).togglePicker();
new DropdownQuantity($dropdownQuantity.eq(4)).togglePicker();