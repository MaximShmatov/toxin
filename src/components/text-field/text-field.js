import 'jquery.maskedinput';

class TextField {
  constructor($component) {
    this.#init($component);
  }

  #init($input) {
    const mask = $input.attr('data-mask');
    if (mask) {
      $input.mask(mask, { placeholder: 'дд.мм.гггг' });
    }
  }
}

export default TextField;
