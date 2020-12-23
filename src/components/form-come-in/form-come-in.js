function formComeIn($component, data) {
  const {
    title,
    email,
    password,
    buttonIn,
    caption,
    buttonCreate,
  } = data;

  $component.find('.js-form-come-in__title').text(title);
  $component.find('.js-text-field[type="email"]').prop('placeholder', email);
  $component.find('.js-text-field[type="password"]').prop('placeholder', password);
  $component.find('.js-button__caption').eq(0).text(buttonIn);
  $component.find('.js-form-come-in__reg-caption').text(caption);
  $component.find('.js-button__caption').eq(1).text(buttonCreate);
}

export default formComeIn;