import footerData from './footer.json';

(function ($) {
  const $footer = $('.js-footer');
  const {
    logoImg,
    logoCaption,
    nav,
    subTitle,
    subCaption,
  } = footerData;

  $footer.find('.js-footer__logo-img').prop('src', logoImg);
  $footer.find('.js-footer__logo-caption').text(logoCaption);

  $footer.find('.js-footer__nav-block').each((index, items) => {
    $(items).find('.js-footer__nav-items-title').text(nav[index].title);
    $(items).find('.js-footer__nav-items-item-ref').each((i, item) => {
      const { href, text } = nav[index].items[i];
      $(item).prop('href', href).text(text);
    });
  });

  $footer.find('.js-footer__subscription-title').text(subTitle);
  $footer.find('.js-footer__subscription-caption').text(subCaption);
}(window.$));
