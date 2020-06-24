'use strict'

import './page-uikit-form.sass';
import {DropdownQuantity} from "../dropdown-quantity/dropdown-quantity";
import {DateRange} from "../date-range/date-range";
import {DateFilter} from '../date-filter/date-filter';
import '../text-field/text-field';
import '../subscription/subscription';
import '../checkbox/checkbox';
import '../radio/radio';
import '../toggle/toggle';
import {Like} from '../like/like';
import '../rate-button/rate-button';
import '../range-slider/range-slider';
import '../button/button';
import '../pagination/pagination';
import {CheckboxList} from "../checkbox-list/checkbox-list";

new DropdownQuantity($($('.dropdown-quantity')[0]));
new DateRange($($('.date-range')[0]));
new DateFilter($($('.date-filter')[0]));
new Like($($('.like')[0]));
new Like($($('.like')[1]));
new DropdownQuantity($($('.dropdown-quantity')[1]), 'room');
new DropdownQuantity($($('.dropdown-quantity')[2]), 'room').quantityPickerToggle();
new CheckboxList($($('.checkbox-list')[0]));
new CheckboxList($($('.checkbox-list')[1])).toggleCheckboxList();