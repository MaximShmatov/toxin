'use strict'

import './page-uikit-form.sass';
import {DropdownGuests} from "../dropdown-guests/dropdown-guests";
import {DateRange} from "../date-range/date-range";
import {DateFilter} from '../date-filter/date-filter';
import '../text-field/text-field';
import '../subscription/subscription';
import '../checkbox/checkbox';
import '../radio/radio';
import '../toggle/toggle';
import {Like} from '../like/like';

new DropdownGuests($($('.dropdown-guests')[0]));
new DateRange($($('.date-range')[0]));
new DateFilter($($('.date-filter')[0]));
new Like($($('.like')[0]));
new Like($($('.like')[1]));