'use strict'

import './pagination-cards.sass';
import '../pagination/pagination';
import {CardRoom} from '../card-room/card-room';
import {cardRoom} from '../../resources/card-room/card-room';

let $paginationCards = $('.pagination-cards');
let $cardRoom = $paginationCards.find('.card-room');

for(let i = 0; i < 12; i++) {
  new CardRoom($($cardRoom[i]), cardRoom[i]);
}