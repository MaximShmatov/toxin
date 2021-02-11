function diagram($component, data) {
  const $diagram = $component.find('.js-diagram');
  $diagram.find('.js-diagram__title').text(data.title);

  const words = data.content.split(' ');
  $diagram.find('.js-diagram__circle-content').html(`
      <span class="diagram__circle-content-title">${words[0]}</span>
      <span class="diagram__circle-content-title">${words[1]}</span>
    `);

  const reducer = (acc, value) => `${acc}<li class="diagram__list-item">${value}</li>`;
  $diagram.find('.js-diagram__list').html(data.list.reduce(reducer, ''));
}

export default diagram;
