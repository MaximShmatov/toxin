function footer($component, data) {
  const {
    logoImg,
    logoCaption,
    nav,
    subTitle,
    subCaption
  } = data;

  $component.find('.js-footer__logo-img').prop('src', logoImg);
  $component.find('.js-footer__logo-caption').text(logoCaption);

  $component.find('.js-footer__nav-block').each((index, items) => {
    $(items).find('.js-footer__nav-items-title').text(nav[index].title);
    $(items).find('.js-footer__nav-items-item-ref').each((i, item) => {
      const { href, text } = nav[index].items[i];
      $(item).prop('href', href).text(text);
    });
  });

  $component.find('.js-footer__subscription-title').text(subTitle);
  $component.find('.js-footer__subscription-caption').text(subCaption);
}

export default footer;