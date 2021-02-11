function bulletList($component, data) {
  const $bulletList = $component.find('.js-bullet-list');
  const item = '<li class = "bullet-list__item">';
  const items = data.reduce((acc, current) => `${acc}${item}${current}</li>`, '');
  $bulletList.find('.js-bullet-list__items').html(items);
}

export default bulletList;
