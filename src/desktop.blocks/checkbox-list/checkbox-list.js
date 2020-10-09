'use strict'

import '../checkbox/checkbox';
import './checkbox-list.sass';


export class CheckboxList {
  #$list;
  #$listDropdown;
  #$listPicker;

  constructor($checkboxList) {
    this.#$list = $checkboxList;
    this.#$listDropdown = $checkboxList.find('.checkbox-list__head-checkbox-true');
    this.#$listPicker = $checkboxList.find('.checkbox-list__picker');
    this.#$listDropdown.on('change', this.checkboxListToggle.bind(this));
  }

  checkboxListToggle() {
    this.#$listPicker.toggleClass('checkbox-list__picker_visible');
    if (this.#$listPicker.hasClass('checkbox-list__picker_visible')) {
      this.#$listDropdown.prop('checked', true);
    } else {
      this.#$listDropdown.prop('checked', false);
    }
  }
}