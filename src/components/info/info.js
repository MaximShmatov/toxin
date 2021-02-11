import './img/info-ico1.svg';
import './img/info-ico2.svg';
import './img/info-ico3.svg';

function info($component, data) {
  const $info = $component.find('.js-info');
  const { name, img, text } = data;
  $info.find('.js-info__item-term').text(name);
  $info.find('.js-info__img').attr('alt', name).attr('src', img);
  $info.find('.js-info__item-definition').text(text);
}

export default info;
