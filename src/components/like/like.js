class Like {
  #$likes;

  #$checkbox;

  constructor($component) {
    this.#$checkbox = $component.find('.js-like__hidden-input');
    this.#$likes = $component.find('.js-like__visible-input-quantity');
    $component.on('change.like', this.#handleCheckboxClick.bind(this));
  }

  #handleCheckboxClick() {
    const currentValue = Number(this.#$likes.text());
    if (this.#$checkbox.is(':checked')) {
      this.#$likes.text(currentValue + 1);
    } else this.#$likes.text(currentValue - 1);
  }
}

export default Like;
