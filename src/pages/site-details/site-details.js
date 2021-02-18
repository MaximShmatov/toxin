import FormReserve from '../../components/form-reservation/form-reservation';
import formReserveData from '../../components/form-reservation/form-reservation.json';

(function ($) {
  const $formReserve = $('.js-page-room__details-reservation');
  new FormReserve($formReserve, formReserveData);
}(window.$));
