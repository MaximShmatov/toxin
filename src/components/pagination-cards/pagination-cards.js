import CardRoom from '../card-room/card-room';
import roomData from '../card-room/card-room.json';

(function ($) {
  const $roomCards = $('.js-pagination-cards__content-card');
  $roomCards.each(function (i) {
    new CardRoom($(this), roomData[i]);
  });
}(window.$));
