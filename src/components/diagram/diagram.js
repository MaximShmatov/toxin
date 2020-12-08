function diagram($component, data) {
  $component.find('.js-diagram__title').text(data.title);

  const words = data.content.split(' ');
  $component.find('.js-diagram__circle-content').html(`
      <span class="diagram__circle-content-title">${words[0]}</span>
      <span class="diagram__circle-content-title">${words[1]}</span>
    `);

  const reducer = (acc, value) => {
    return `${acc}<li class="diagram__list-item">${value}</li>`;
  }
  $component.find('.js-diagram__list').html(data.list.reduce(reducer, ''));
}

export default diagram;