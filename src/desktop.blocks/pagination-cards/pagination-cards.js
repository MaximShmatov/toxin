'use strict'

import {cardRoom} from '../../resources/card-room/card-room';
import {CardRoom} from '../card-room/card-room';
import '../pagination/pagination';
import './pagination-cards.sass';


let $paginationCards = $('.pagination-cards');
let $cardRoom = $paginationCards.find('.card-room');

for (let i = 0; i < 12; i++) {
  new CardRoom($($cardRoom[i]), cardRoom[i]);
}