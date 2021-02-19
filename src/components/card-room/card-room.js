import './img/card-room-350-4.jpg';
import './img/card-room-352-4.jpg';
import './img/card-room-444-4.jpg';
import './img/card-room-450-4.jpg';
import './img/card-room-666-4.jpg';
import './img/card-room-678-4.jpg';
import './img/card-room-740-4.jpg';
import './img/card-room-840-4.jpg';
import './img/card-room-856-4.jpg';
import './img/card-room-888-4.jpg';
import './img/card-room-980-4.jpg';
import './img/card-room-982-4.jpg';

(function ($) {
  $('.js-card-room').each(function () {
    const $radio = $(this).find('.js-card-room__slider-radio');

    const handleButtonLeftClick = () => {
      $radio.each((index, item) => {
        if ($(item).prop('checked')) {
          $radio.eq(index + 1).prop('checked', true);
          $radio.eq(index + 1).attr('data-direction', 'left');
          return false;
        }
        return true;
      });
    };

    const handleButtonRightClick = () => {
      $radio.each((index, item) => {
        if ($(item).prop('checked') && index > 0) {
          $radio.eq(index - 1).prop('checked', true);
          $radio.eq(index - 1).attr('data-direction', 'right');
          return false;
        }
        return true;
      });
    };

    $(this).find('.js-card-room__slider-control-left-button')
      .on('click.cardroom', handleButtonLeftClick);
    $(this).find('.js-card-room__slider-control-right-button')
      .on('click.cardroom', handleButtonRightClick);
  });
}(window.$));
