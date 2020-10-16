'use strict'

import {review} from '../../resources/review/review';
import {info} from '../../resources/info/info';
import {Info} from '../info/info';
import Review from '../review/review';
import '../diagram/diagram';
import '../bullet-list/bullet-list';
import '../form-reservation/form-reservation';
import '../template-site/template-site';
import './page-room-details.sass';

let $pageRoom = $('.page-room');
let $review = $pageRoom.find('.review');
let $info = $pageRoom.find('.info');

for (let i = 0; i < 2; i++) {
  new Review(review[i], $($review[i]));
}

for (let i = 0; i < 3; i++) {
  new Info($($info[i]), info[i]);
}