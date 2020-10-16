'use strict'

import 'jquery.maskedinput/src/jquery.maskedinput';
import './text-field.sass';


$('.text-field').each(setEvents);

function setEvents(index, item) {
  const mask = item.getAttribute('data-mask')
  if (mask) {
    $(item).mask(mask, {placeholder: "дд.мм.гггг"});
  }
}