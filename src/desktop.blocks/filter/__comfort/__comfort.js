'use strict'

import('./__comfort.sass');
import('../__checkbox/__checkbox');

let $comfort = $('.filter__comfort');
let $comfortHeadButton = $comfort.find('.filter__comfort-head-button-false');
let $comfortPicker = $comfort.find('.filter__comfort-picker');

$comfortHeadButton.on('click', toggleComfortPicker);

function toggleComfortPicker() {
  $comfortPicker.toggleClass('filter__comfort-picker_visible');
}