'use strict'

import CardRoom from '../card-room/card-room';
import roomData from '../card-room/card-room.json';
import '../pagination/pagination';
import './pagination-cards.sass';


const $paginationCards = $('.pagination-cards');
const $roomCards = $paginationCards.find('.card-room');

$roomCards.each(function (i) {
  new CardRoom($(this), roomData[i]);
})
