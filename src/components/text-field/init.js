import TextField from './text-field';

(function ($) {
  $('.js-text-field').each(function () {
    new TextField($(this));
  });
}(window.$));
