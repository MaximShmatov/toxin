function bulletList($component, data) {
  let items = '';
  data.forEach(item => items += `<li class = "bullet-list__item">${item}</li>`);
  $component.replaceWith(items);
}

export default bulletList;
