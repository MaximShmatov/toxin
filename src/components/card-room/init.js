import CardRoom from './card-room';

(function ($) {
  $('.js-card-room').each(function () {
    new CardRoom($(this));
  });
}($));
