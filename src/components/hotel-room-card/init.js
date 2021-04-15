import CardRoom from './hotel-room-card';

(function ($) {
  $('.js-hotel-room-card').each(function () {
    new CardRoom($(this));
  });
}($));
