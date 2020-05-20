'use strict'

import('../button/button');
import('./date-range.sass');

;(function ($) {
  let $dateRange = $('.date-range');
  let $input = $dateRange.find('.date-range__input');
  let $dropdown = $dateRange.find('.date-range__dropdown');
  let $picker = $dateRange.find('.date-range__picker');
  let $pickerList = $dateRange.find('.date-range__picker-list');
  let pickerTitle = $dateRange.find('.date-range__picker-title');
  let $pickerTableDate = $dateRange.find('.date-range__picker-table-date');
  let $pickerButton = $dateRange.find('.date-range__picker-button');

  function togglePicker() {
    if ($picker.css('visibility') === 'hidden') {
      $picker.css('visibility', 'visible');
    } else $picker.css('visibility', 'hidden');
  }

  $dropdown.on('click', function () {
    togglePicker();
    console.log('click');
  });
  return this
})($);