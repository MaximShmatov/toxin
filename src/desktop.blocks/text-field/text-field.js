'use strict'

import './text-field.sass';


(function ($) {
  $('.js-text-field').each(setEvents);

  function setEvents(index, item) {
    const mask = item.getAttribute('data-mask')
    if (mask) {
      $(item).mask(mask, {placeholder: "дд.мм.гггг"});
    }
  }
})(window.$);
