'use strict'

import './page-uikit-cards.sass';
import '../form-search-room/form-search-room';
import '../form-reservation/form-reservation';
import {DatePicker} from '../date-picker/date-picker';
import '../form-registration/form-registration';
import '../form-come-in/form-come-in';
import {CardRoom} from '../card-room/card-room';
import {cardRoom} from '../../resources/card-room/card-room';

let $picker = $('.uikit-cards__form:nth-of-type(3) .date-picker');
let $cardsRoom = $('.uikit-cards__form .card-room');

new CardRoom($($cardsRoom[0]), cardRoom[0]);
new CardRoom($($cardsRoom[1]), cardRoom[1]);
new DatePicker($picker).datePickerToggle();