import DatePicker from '../../components/date-picker/date-picker';

(function ($) {
  $('.js-uikit-forms__form-picker').each(function () {
    new DatePicker($(this));
  });
}($));
