'use strict'

import './like.sass';

$('.like').on('change', handleOnChangeLike.bind(this));

function handleOnChangeLike(evt) {
  const isChecked = $(evt.currentTarget).find('.like__true').is(':checked');

  $(evt.currentTarget).find('.like__false-quantity').each(function () {
    if (isChecked) {
      $(this).text(Number($(this).text()) + 1);
    } else {
      $(this).text(Number($(this).text()) - 1);
    }
  });
}