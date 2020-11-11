import DatePicker from '../../components/date-picker/date-picker';
import CardRoom from '../../components/card-room/card-room';
import roomData from '../../components/card-room/card-room.json';

(function ($) {
  const $picker = $('.js-uikit-cards__form .js-date-picker');
  new DatePicker($picker);

  const $cardsRoom = $('.js-uikit-cards__form .js-card-room');
  new CardRoom($cardsRoom.eq(0), roomData[0]);
  new CardRoom($cardsRoom.eq(1), roomData[1]);
}(window.$));
