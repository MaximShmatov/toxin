'use strict'

import './page-uikit-elements.sass';
import {DropdownQuantity} from '../dropdown-quantity/dropdown-quantity';
import {DateRange} from '../date-range/date-range';
import {DateFilter} from '../date-filter/date-filter';
import '../text-field/text-field';
import '../subscription/subscription';
import '../checkbox/checkbox';
import '../radio/radio';
import '../toggle/toggle';
import {Like} from '../like/like';
import {RateButton} from '../rate-button/rate-button';
import '../range-slider/range-slider';
import '../button/button';
import '../pagination/pagination';
import {CheckboxList} from '../checkbox-list/checkbox-list';
import '../checkbox-rich/checkbox-rich';
import '../bullet-list/bullet-list';
import {Info} from '../info/info';
import {info} from '../../resources/info/info';
import {Review} from '../review/review';
import {review} from '../../resources/review/review';


let $uikitElements = $('.uikit-elements');
let $dropdownQuantity = $uikitElements.find('.dropdown-quantity');
let $like = $uikitElements.find('.like');
let $rate = $uikitElements.find('.rate-button');
let $checkboxList = $uikitElements.find('.checkbox-list');
let $dateRange = $uikitElements.find('.date-range');
let $dateFilter = $uikitElements.find('.date-filter');
let $info = $uikitElements.find('.info');
let $review = $uikitElements.find('.review');


new DropdownQuantity($($dropdownQuantity[0]));
new DateRange($dateRange);
new DateFilter($dateFilter);
new Like($($like[0])).likes = 12;
new Like($($like[1])).likes = 12;
new RateButton($($rate[0]), 4);
new RateButton($($rate[1]), 5);
new DropdownQuantity($($dropdownQuantity[1]), 'room');
new DropdownQuantity($($dropdownQuantity[2]), 'room').quantityPickerToggle();
new CheckboxList($($checkboxList[0]));
new CheckboxList($($checkboxList[1])).checkboxListToggle();
new DropdownQuantity($($dropdownQuantity[3])).quantityPickerToggle();
new DropdownQuantity($($dropdownQuantity[4])).quantityPickerToggle();
new Info($($info[0]), info[0]);
new Info($($info[1]), info[1]);
new Review(review[0], $review);