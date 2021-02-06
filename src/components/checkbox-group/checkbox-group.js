function checkboxGroup($component, data) {
  $component.find('.js-checkbox').each((index, item) => {
    const { name, caption, isChecked } = data[index];
    $(item).find('.js-checkbox__caption').text(caption);
    $(item).find('.js-checkbox__input')
      .prop('name', name)
      .prop('checked', isChecked);
  });
}

export default checkboxGroup;