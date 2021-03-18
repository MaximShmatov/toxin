import FormReservation from './form-reservation';

(function ($) {
  $('.js-form-reserve').each(function () {
    new FormReservation($(this));
  });
}($));
