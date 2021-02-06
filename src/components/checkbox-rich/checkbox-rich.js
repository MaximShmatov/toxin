function checkboxRich($component, data) {
  $component.find('.js-checkbox-rich__checkbox')
    .each((index, item) => {
      const { name, caption, isChecked } = data[index];
      $(item).find('.js-checkbox span')
        .text(caption);
      $(item).find('.js-checkbox__input')
        .prop('name', name)
        .prop('checked', isChecked);
  });
  $component.find('.js-checkbox-rich__info')
    .each((index, item) => {
      item.innerText = data[index].info;
    });
}

export default checkboxRich;