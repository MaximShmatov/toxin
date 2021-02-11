(function ($) {
  function handleLikeChange(evt) {
    const isChecked = $(evt.currentTarget).find('.js-like__hidden').is(':checked');

    $(evt.currentTarget).find('.js-like__visible-quantity').each(function () {
      if (isChecked) $(this).text(Number($(this).text()) + 1);
      else $(this).text(Number($(this).text()) - 1);
    });
  }

  $('.js-like').on('change.like', handleLikeChange.bind(this));
}(window.$));
