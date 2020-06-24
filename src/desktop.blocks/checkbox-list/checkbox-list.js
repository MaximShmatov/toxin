'use strict'

import './checkbox-list.sass';
import '../checkbox/checkbox';

export class CheckboxList {
  #$list;
  #$listDropdown;
  #$listPicker;

  constructor($checkboxList) {
    this.#$list = $checkboxList;
    this.#$listDropdown = $checkboxList.find('.checkbox-list__head-checkbox-true');
    this.#$listPicker = $checkboxList.find('.checkbox-list__picker');
    this.#$listDropdown.on('change', this.toggleCheckboxList.bind(this));
  }

  toggleCheckboxList() {
    console.log(this);
    this.#$listPicker.toggleClass('checkbox-list__picker_visible');
    this.#$listDropdown.prop('checked', true);
  }
}