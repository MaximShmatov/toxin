'use strict'

import('./page-room.sass');
import('../diagram/diagram');
import {Review as Review} from '../review/review';
import('../resources/review/review');
import reviews from './page-room__reviews.json';
import('../reservation/reservation');


let r = $('.review');
for (let i = 0; i < 2; i++) {
  new Review(reviews[i], $(r[i]));
}