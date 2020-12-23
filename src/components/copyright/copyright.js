function copyright($component, data) {
  const {logo, caption, refs} = data;

  $component.find('.js-copyright__logo').prop('src', logo);
  $component.find('.js-copyright__caption').text(caption);
  $component.find('.js-copyright__social-icon')
    .each((index, item) => {
      $(item).prop('href', refs[index]);
    });
}

export default copyright;