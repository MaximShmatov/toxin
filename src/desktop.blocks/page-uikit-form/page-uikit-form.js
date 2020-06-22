'use strict'

import './page-uikit-form.sass';
import {DropdownGuests} from "../dropdown-guests/dropdown-guests";
import {DateRange} from "../date-range/date-range";
//import '../date-filter/date-filter';
import '../text-field/text-field';
import '../subscription/subscription';


new DropdownGuests($($('.dropdown-guests')[0]));
new DateRange($($('.date-range')[0]));