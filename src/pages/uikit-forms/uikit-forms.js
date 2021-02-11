import DatePicker from '../../components/date-picker/date-picker';
import CardRoom from '../../components/card-room/card-room';
import roomData from '../../components/card-room/card-room.json';

(function ($) {
  const $page = $('.js-uikit-cards');

  const $components = $page.find('.js-uikit-cards__form');
  new DatePicker($components.eq(0));
  new CardRoom($components.eq(1), roomData[0]);
  new CardRoom($components.eq(2), roomData[1]);
}(window.$));
