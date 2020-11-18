import './img/review-avatar1.jpg';
import './img/review-avatar2.jpg';

function review($component, data) {
  const {
    name, avatar, quote, date,
  } = data;
  $component.find('.js-review__author-name').text(name);
  $component.find('.js-review__author-img').attr('alt', name).attr('src', avatar);
  $component.find('.js-review__author-date').text(date);
  $component.find('.js-review__quote-text').text(quote);
}

export default review;
