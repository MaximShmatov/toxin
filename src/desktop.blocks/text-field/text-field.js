'use strict'

import './text-field.sass';
import 'jquery.maskedinput/src/jquery.maskedinput';

$('.text-field').each(setEvents);

function setEvents(index, item) {
  if ($(item).attr('data-mask')) {
    $(item).mask($(item).attr('data-mask'), {placeholder: "дд.мм.гггг"});
  }
}