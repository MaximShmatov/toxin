'use strict'

import './page-room-details.sass';
import {Info} from '../info/info';
import {info} from '../../resources/info/info';
import '../diagram/diagram';
import {Review} from '../review/review';
import {review} from '../../resources/review/review';
import '../bullet-list/bullet-list';
import '../form-reservation/form-reservation';

let $pageRoom = $('.page-room');
let $review = $pageRoom.find('.review');
let $info = $pageRoom.find('.info');

for (let i = 0; i < 2; i++) {
  new Review(review[i], $($review[i]));
}

for (let i = 0; i < 3; i++) {
  new Info($($info[i]), info[i]);
}