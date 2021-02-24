import DatePicker from '../../components/date-picker/date-picker';

(function ($) {
  $('.js-uikit-cards__form').each(function () {
    new DatePicker($(this));
  });
}(window.$));
