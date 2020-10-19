'use strict'

import DatePicker from '../date-picker/date-picker';
import CardRoom from '../card-room/card-room';
import roomData from '../card-room/card-room.json';
import '../form-search-room/form-search-room';
import '../form-reservation/form-reservation';
import '../form-registration/form-registration';
import '../form-come-in/form-come-in';
import '../template-uikit/template-uikit';
import './page-uikit-forms.sass';


const $picker = $('.uikit-cards__form:nth-of-type(3) .date-picker');
const $cardsRoom = $('.uikit-cards__form .card-room');

new CardRoom($cardsRoom.eq(0), roomData[0]);
new CardRoom($cardsRoom.eq(1), roomData[1]);
new DatePicker($picker);
