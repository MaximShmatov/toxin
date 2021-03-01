import DropdownQuantity from '../dropdown-quantity/dropdown-quantity';
import DateRange from '../date-range/date-range';

class FormSearchRoom {
  constructor($component) {
    this.#init($component);
  }

  #init($component) {
    new DateRange($component);
    new DropdownQuantity($component);
  };
}

export default FormSearchRoom;
