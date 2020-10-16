'use strict'

import {cardRoom} from '../../resources/card-room/card-room';
import DatePicker from '../date-picker/date-picker';
import {CardRoom} from '../card-room/card-room';
import '../form-search-room/form-search-room';
import '../form-reservation/form-reservation';
import '../form-registration/form-registration';
import '../form-come-in/form-come-in';
import '../template-uikit/template-uikit';
import './page-uikit-forms.sass';


const $picker = $('.uikit-cards__form:nth-of-type(3) .date-picker');
const $cardsRoom = $('.uikit-cards__form .card-room');

new CardRoom($($cardsRoom[0]), cardRoom[0]);
new CardRoom($($cardsRoom[1]), cardRoom[1]);
new DatePicker($picker);
