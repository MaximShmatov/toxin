import '../../templates/template-uikit/template-uikit';

import copyright from '../../components/copyright/copyright';
import copyrightData from '../../components/copyright/copyright.json';

(function ($){
  const $page = $('.js-uikit-headers-footers');

  const $copyright = $page.find('.js-copyright');
  copyright($copyright.eq(0), copyrightData);
  copyright($copyright.eq(1), copyrightData);
}(window.$))
