import '../../../node_modules/jquery.maskedinput/src/jquery.maskedinput';

(function ($) {
  function setEvents(index, item) {
    const mask = item.getAttribute('data-mask');
    if (mask) {
      $(item).mask(mask, { placeholder: 'дд.мм.гггг' });
    }
  }

  $('.js-text-field').each(setEvents);
}(window.$));
