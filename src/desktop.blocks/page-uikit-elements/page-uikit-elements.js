'use strict'

import { review } from '../../resources/review/review';
import { info } from '../../resources/info/info';

import {Info} from '../info/info';
import Review from '../review/review';
import RangeSlider from '../range-slider/range-slider';
import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';
import DateFilter from '../date-filter/date-filter';
import {Like} from '../like/like';
import {RateButton} from '../rate-button/rate-button';
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
import './page-uikit-elements.sass';


let $uikitElements = $('.uikit-elements');
let $dropdownQuantity = $uikitElements.find('.dropdown-quantity');
let $like = $uikitElements.find('.like');
let $rate = $uikitElements.find('.rate-button');
let $rangeSlider = $uikitElements.find('.range-slider');
let $dateRange = $uikitElements.find('.date-range');
let $dateFilter = $uikitElements.find('.date-filter');
let $info = $uikitElements.find('.info');
let $review = $uikitElements.find('.review');

new DropdownQuantity($($dropdownQuantity[0]));
new DateRange($dateRange);
new DateFilter($dateFilter);
new Like($($like[0])).likes = 2;
new Like($($like[1])).likes = 12;
new RateButton($($rate[0]), 4);
new RateButton($($rate[1]), 5);
new RangeSlider($rangeSlider);
new DropdownQuantity($($dropdownQuantity[1]), 'room');
new DropdownQuantity($($dropdownQuantity[2]), 'room').togglePicker();
new DropdownQuantity($($dropdownQuantity[3])).togglePicker();
new DropdownQuantity($($dropdownQuantity[4])).togglePicker();
new Info($($info[0]), info[0]);
new Info($($info[1]), info[1]);
new Review(review[0], $review);