function bulletList($component, data) {
  const items = data.reduce((acc, current) => {
    return `${acc}<li class = "bullet-list__item">${current}</li>`;
  }, '');
  $component.find('.js-bullet-list__items').html(items);
}

export default bulletList;
