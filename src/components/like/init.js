import Like from './like';

(function ($) {
  $('.js-like').each(function () {
    new Like($(this));
  });
}(window.$));
