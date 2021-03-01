import '../../../node_modules/jquery.maskedinput/src/jquery.maskedinput';

class TextField {
  constructor($component) {
    const mask = $component.attr('data-mask');
    if (mask) {
      $component.mask(mask, { placeholder: 'дд.мм.гггг' });
    }
  }
}

export default TextField;
