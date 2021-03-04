import UikitElements from './uikit-elements';

(function ($) {
  $('.js-uikit-elements').each(function () {
    new UikitElements($(this));
  });
}($));
