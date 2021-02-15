import review from '../../components/review/review';
import reviewData from '../../components/review/review.json';

import info from '../../components/info/info';
import infoData from '../../components/info/info.json';

import diagram from '../../components/diagram/diagram';
import diagramData from '../../components/diagram/diagram.json';

(function ($) {
  const $pageRoom = $('.js-page-room');
  diagram($pageRoom, diagramData);

  const $review = $pageRoom.find('.js-page-room__details-reviews-item');
  review($review.eq(0), reviewData[0]);
  review($review.eq(1), reviewData[1]);

  const $info = $pageRoom.find('.js-page-room__details-info-item');
  info($info.eq(0), infoData[0]);
  info($info.eq(1), infoData[1]);
  info($info.eq(2), infoData[2]);
}(window.$));
