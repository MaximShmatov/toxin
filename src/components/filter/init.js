import Filter from './filter';

(function ($) {
  $('.js-filter').each(function () {
    new Filter($(this));
  });
}(window.$));
