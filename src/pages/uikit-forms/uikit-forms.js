import DatePicker from '../../components/date-picker/date-picker';
import CardRoom from '../../components/card-room/card-room';
import roomData from '../../components/card-room/card-room.json';
import '../../components/form-search-room/form-search-room';
import '../../components/form-reservation/form-reservation';
import '../../components/form-registration/form-registration';
import '../../components/form-come-in/form-come-in';
import '../../templates/template-uikit/template-uikit';
import './uikit-forms.sass';

(function ($) {
  const $picker = $('.js-uikit-cards__form .js-date-picker');
  new DatePicker($picker);

  const $cardsRoom = $('.js-uikit-cards__form .js-card-room');
  new CardRoom($cardsRoom.eq(0), roomData[0]);
  new CardRoom($cardsRoom.eq(1), roomData[1]);
}(window.$));
