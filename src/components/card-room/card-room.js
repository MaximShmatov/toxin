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
    const radio = $(this)
      .find('.js-card-room__slider-radio');

    const handleButtonLeftClick = () => {
      for (let i = 0; i < 4; i += 1) {
        if ($(radio).eq(i).prop('checked')) {
          $(radio).eq(i + 1).prop('checked', true);
          $(radio).eq(i + 1).attr('data-dir', 'l');
          return;
        }
      }
    };

    const handleButtonRightClick = () => {
      for (let i = 1; i < 5; i += 1) {
        if ($(radio).eq(i).prop('checked')) {
          $(radio).eq(i - 1).prop('checked', true);
          $(radio).eq(i - 1).attr('data-dir', 'r');
          return;
        }
      }
    };

    $(this).find('.js-card-room__slider-control-left-button')
      .on('click.cardroom', handleButtonLeftClick.bind(this));
    $(this).find('.js-card-room__slider-control-right-button')
      .on('click.cardroom', handleButtonRightClick.bind(this));
  });
}(window.$));
