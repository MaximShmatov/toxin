import './img/card-room-350-4.jpg';
import './img/card-room-352-4.jpg';
import './img/card-room-444-4.jpg';
import './img/card-room-450-4.jpg';
import './img/card-room-666-4.jpg';
import './img/card-room-678-4.jpg';
import './img/card-room-740-4.jpg';
import './img/card-room-840-4.jpg';
import './img/card-room-856-4.jpg';
import './img/card-room-888-4.jpg';
import './img/card-room-980-4.jpg';
import './img/card-room-982-4.jpg';
import CardRoom from './card-room';

(function ($) {
  $('.js-card-room').each(function () {
    new CardRoom($(this));
  });
}($));
