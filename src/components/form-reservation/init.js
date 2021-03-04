import FormReservation from './form-reservation';
import formData from './form-reservation.json';

(function ($) {
  $('.js-form-reserve').each(function () {
    new FormReservation($(this), formData);
  });
}($));
