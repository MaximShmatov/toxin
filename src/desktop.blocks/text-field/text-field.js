'use strict'

import('./text-field.sass');

$('.text-field__input').each(setEvents);

function setEvents(index, item) {
  $(item).on('mouseover', setValueMouseover);
  $(item).on('mouseout', setValueMouseout);
  $(item).on('focus', setValueMouseover);
  $(item).on('blur', setValueMouseout);
}

function setValueMouseover() {
  $(this).val('This is pretty awesome');
}

function setValueMouseout() {
  if (!$(this).is(':focus')) {
    $(this).val('Email');
  }
}