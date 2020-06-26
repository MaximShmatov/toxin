'use strict'

import './page-room-details.sass';
import '../diagram/diagram';
import {Review as Review} from '../review/review';
import '../../resources/review/review';
import reviews from '../../resources/review/review.json';
//import '../form-reservation/form-reservation';


let r = $('.review');
for (let i = 0; i < 2; i++) {
  new Review(reviews[i], $(r[i]));
}
