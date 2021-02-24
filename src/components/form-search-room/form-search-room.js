import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';

class FormSearchRoom {
  #$form;

  constructor($component) {
    this.#$form = $component;
    this.#init();
  }

  #init() {
    new DateRange(this.#$form);
    new DropdownQuantity(this.#$form);
  };
}

export default FormSearchRoom;
