'use strict'

import {CardRoom as cardRoom} from '../card-room/card-room';
import('../resources/resources');
import roomsData from './pagination__rooms.json';
import('./pagination.sass');

let rooms = $('.card-room');

for(let i = 0; i < 12; i++) {
  new cardRoom(roomsData[i], $(rooms[i]));
}