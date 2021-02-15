import DatePicker from '../../components/date-picker/date-picker';

(function ($) {
  const $page = $('.js-uikit-cards');

  const $components = $page.find('.js-uikit-cards__form');
  new DatePicker($components.eq(0));
}(window.$));
