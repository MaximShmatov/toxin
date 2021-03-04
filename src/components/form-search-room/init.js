import FormSearchRoom from './form-search-room';

(function ($) {
  $('.js-form-search-room').each(function () {
    new FormSearchRoom($(this));
  });
}($));
