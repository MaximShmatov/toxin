'use strict'

import './page-uikit-cards.sass';
import '../form-search-room/form-search-room';
import '../form-reservation/form-reservation';
import {DatePicker} from "../date-picker/date-picker";
import '../form-registration/form-registration';

let $uikitCards = $('.uikit-cards__form:nth-of-type(3)');

new DatePicker($uikitCards.find('.date-picker')).datePickerToggle();