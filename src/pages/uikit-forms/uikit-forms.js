import FormReserve from '../../components/form-reservation/form-reservation';
import formReserveData from '../../components/form-reservation/form-reservation.json';

import DatePicker from '../../components/date-picker/date-picker';

(function ($) {
  const $uikitForms = $('.js-uikit-cards__form');
  new FormReserve($uikitForms.eq(0), formReserveData);
  new DatePicker($uikitForms.eq(1));
}(window.$));
