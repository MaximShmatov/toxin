import formComeIn from '../../components/form-come-in/form-come-in';
import formComeInData from '../../components/form-come-in/form-come-in.json';

import DatePicker from '../../components/date-picker/date-picker';
import CardRoom from '../../components/card-room/card-room';
import roomData from '../../components/card-room/card-room.json';

(function ($) {
  const $page = $('.js-uikit-cards');

  const $formComeIn = $page.find('.js-form-come-in');
  formComeIn($formComeIn, formComeInData);

  const $picker = $page.find('.js-uikit-cards__form .js-date-picker');
  new DatePicker($picker);

  const $cardsRoom = $page.find('.js-uikit-cards__form .js-card-room');
  new CardRoom($cardsRoom.eq(0), roomData[0]);
  new CardRoom($cardsRoom.eq(1), roomData[1]);
}(window.$));
