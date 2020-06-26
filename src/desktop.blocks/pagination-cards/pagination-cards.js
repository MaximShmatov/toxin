'use strict'

import {CardRoom as cardRoom} from '../card-room/card-room';
import '../resources/resources';
import roomsData from '../../resources/card-room/card-room.json';
import './pagination-cards.sass';

let rooms = $('.card-room');

for(let i = 0; i < 12; i++) {
  new cardRoom(roomsData[i], $(rooms[i]));
}