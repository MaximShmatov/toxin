import '../../../node_modules/jquery.maskedinput/src/jquery.maskedinput';

(function ($) {
  const setMask = (index, item) => {
    const mask = item.getAttribute('data-mask');
    if (mask) $(item).mask(mask, { placeholder: 'дд.мм.гггг' });
  };

  $('.js-text-field').each(setMask);
}(window.$));
