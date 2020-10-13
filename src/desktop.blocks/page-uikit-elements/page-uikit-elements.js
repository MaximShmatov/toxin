'use strict'

import { review } from '../../resources/review/review';
import { info } from '../../resources/info/info';

import {Info} from '../info/info';
import Review from '../review/review';
import {RangeSlider} from '../range-slider/range-slider';
import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';
import DateFilter from '../date-filter/date-filter';
import {Like} from '../like/like';
import {RateButton} from '../rate-button/rate-button';
import {CheckboxList} from '../checkbox-list/checkbox-list';
import '../text-field/text-field';
import '../subscription/subscription';
import '../checkbox/checkbox';
import '../radio/radio';
import '../toggle/toggle';
import '../button/button';
import '../pagination/pagination';
import '../checkbox-rich/checkbox-rich';
import '../bullet-list/bullet-list';
import './page-uikit-elements.sass';


let $uikitElements = $('.uikit-elements');
let $rangeSlider = $uikitElements.find('.range-slider');
let $dropdownQuantity = $uikitElements.find('.dropdown-quantity');
let $like = $uikitElements.find('.like');
let $rate = $uikitElements.find('.rate-button');
let $checkboxList = $uikitElements.find('.checkbox-list');
let $dateRange = $uikitElements.find('.date-range');
let $dateFilter = $uikitElements.find('.date-filter');
let $info = $uikitElements.find('.info');
let $review = $uikitElements.find('.review');

let $slider = new RangeSlider($rangeSlider).$slider;
$slider.slider('maxValue', 15900);
let $rangeSliderTitle = $uikitElements.find('.range-slider__title');
let $rangeSliderPrice = $uikitElements.find('.range-slider__range');
let $rangeSliderInfo = $uikitElements.find('.range-slider__info');
$rangeSliderInfo.css('visibility', 'hidden');
$rangeSliderTitle.text('Range slider');
$rangeSliderTitle.append($rangeSliderPrice);

new DropdownQuantity($($dropdownQuantity[0]));
new DateRange($dateRange);
new DateFilter($dateFilter);
new Like($($like[0])).likes = 2;
new Like($($like[1])).likes = 12;
new RateButton($($rate[0]), 4);
new RateButton($($rate[1]), 5);
new DropdownQuantity($($dropdownQuantity[1]), 'room');
new DropdownQuantity($($dropdownQuantity[2]), 'room').togglePicker();
new CheckboxList($($checkboxList[0]));
new CheckboxList($($checkboxList[1])).checkboxListToggle();
new DropdownQuantity($($dropdownQuantity[3])).togglePicker();
new DropdownQuantity($($dropdownQuantity[4])).togglePicker();
new Info($($info[0]), info[0]);
new Info($($info[1]), info[1]);
new Review(review[0], $review);