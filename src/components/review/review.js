import './img/review-avatar1.jpg';
import './img/review-avatar2.jpg';

function review($component, data) {
  const $review = $component.find('.js-review');
  const {
    name, avatar, quote, date,
  } = data;
  $review.find('.js-review__author-name').text(name);
  $review.find('.js-review__author-img').attr('alt', name).attr('src', avatar);
  $review.find('.js-review__author-date').text(date);
  $review.find('.js-review__quote-text').text(quote);
}

export default review;
