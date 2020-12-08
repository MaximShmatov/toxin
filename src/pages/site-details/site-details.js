import bulletList from '../../components/bullet-list/bullet-list';
import bulletListData from '../../components/bullet-list/bullet-list.json';

import review from '../../components/review/review';
import reviewData from '../../components/review/review.json';

import info from '../../components/info/info';
import infoData from '../../components/info/info.json';

import diagram from '../../components/diagram/diagram';
import diagramData from '../../components/diagram/diagram.json';

(function ($) {
  const $pageRoom = $('.js-page-room');

  const $bullet = $pageRoom.find('.js-bullet-list__items');
  bulletList($bullet, bulletListData[0]);

  const $review = $pageRoom.find('.js-review');
  review($review.eq(0), reviewData[0]);
  review($review.eq(1), reviewData[1]);

  const $info = $pageRoom.find('.js-info');
  info($info.eq(0), infoData[0]);
  info($info.eq(1), infoData[1]);
  info($info.eq(2), infoData[2]);

  const $diagram = $pageRoom.find('.js-diagram');
  diagram($diagram, diagramData);
}(window.$));
