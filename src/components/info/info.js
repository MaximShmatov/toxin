import './img/info-ico1.svg';
import './img/info-ico2.svg';
import './img/info-ico3.svg';

function info($component, data) {
  const {
    name, img, text,
  } = data;
  $component.find('.js-info__item-term').text(name);
  $component.find('.js-info__img').attr('alt', name).attr('src', img);
  $component.find('.js-info__item-definition').text(text);
}

export default info;
