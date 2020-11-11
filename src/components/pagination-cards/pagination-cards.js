import CardRoom from '../card-room/card-room';
import roomData from '../card-room/card-room.json';

(function ($) {
  const $paginationCards = $('.js-pagination-cards');
  const $roomCards = $paginationCards.find('.js-card-room');

  $roomCards.each(function (i) {
    new CardRoom($(this), roomData[i]);
  });
}(window.$));
