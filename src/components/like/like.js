(function ($) {
  const handleLikeChange = (evt) => {
    const isChecked = $(evt.currentTarget)
      .find('.js-like__hidden-input')
      .is(':checked');

    $(evt.currentTarget)
      .find('.js-like__visible-input-quantity')
      .each(function () {
        const currentValue = Number($(this).text());
        if (isChecked) $(this).text(currentValue + 1);
        else $(this).text(currentValue - 1);
      });
  };

  $('.js-like').on('change.like', handleLikeChange.bind(this));
}(window.$));
