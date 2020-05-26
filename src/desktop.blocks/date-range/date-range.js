'use strict'

import('./date-range.sass');
import('../button/button');
import('../date-picker/date-picker');

;(function ($) {
  $.fn.dateRange = function () {

    let $dateRange = $('.date-range');
    let input = $dateRange.find('.date-range__entry-input');
    let dropdown = $dateRange.find('.date-range__entry-dropdown');
    let picker = $dateRange.find('.date-range__picker');
    let pickerList = $dateRange.find('.date-range__picker-list');
    let pickerTitle = $dateRange.find('.date-range__picker-title');
    let pickerTableDate = $dateRange.find('.date-range__picker-table-date');
    let pickerButton = $dateRange.find('.date-range__picker-button');
    
    function pickerHidden(evt) {
      if (picker.has(evt.target).length === 0) picker.css('display', 'none');
    }
    function togglePicker() {
      if (picker.css('display') === 'none') {
        picker.css('display', 'block');
      } else picker.css('display', 'none');
    }

    dropdown.on('click', togglePicker);

    document.addEventListener('mouseup', pickerHidden);

    return this;
  }
})($);

$('.date-range').dateRange();