class DatePicker {
  #$picker;

  #$headerDate;

  #$bodyDates;

  #$bodyRanges;

  #eventClear = 'datepicker.clear';

  #eventSubmit = 'datepicker.submit';

  #eventSelectIn = 'datepicker.select.in';

  #eventSelectOut = 'datepicker.select.out';

  #pickerDate = new Date();

  #months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  currentDate = this.#pickerDate.getTime();

  dateComeIn = this.currentDate.toString();

  dateCheckOut = this.currentDate.toString();

  counter = 0;

  constructor($component) {
    this.#init($component);
    this.#setHandles();
  }

  #init($component) {
    this.#$picker = $component.find('.js-date-picker');
    this.#$headerDate = $component.find('.js-date-picker__head-date');
    this.#$bodyRanges = $component.find('.js-date-picker__body-range');
    this.#$bodyDates = $component.find('.js-date-picker__body-date');
    this.#setPickerDate();
  }

  #setHandles() {
    this.#$bodyDates.on('click.datepicker', this.#handlePickerBodyClick.bind(this));
    this.#$picker.find('.js-date-picker__head-list-left')
      .on('click.datepicker', this.#handlePickerButtonLeftClick.bind(this));
    this.#$picker.find('.js-date-picker__head-list-right')
      .on('click.datepicker', this.#handlePickerButtonRightClick.bind(this));
    this.#$picker.find('.js-date-picker__footer-clear')
      .on('click.datepicker', this.#handlePickerButtonClearClick.bind(this));
    this.#$picker.find('.js-date-picker__footer-submit')
      .on('click.datepicker', this.#handlePickerButtonSubmitClick.bind(this));
  }

  #handlePickerBodyClick(event) {
    const date = event.currentTarget.getAttribute('data-timestamp');
    if (this.currentDate >= Number(date)) {
      this.dateComeIn = this.currentDate.toString();
      this.#$picker.trigger(this.#eventSelectIn);
    } else if (this.dateCheckOut >= Number(date)) {
      this.dateComeIn = date;
      this.#$picker.trigger(this.#eventSelectIn);
    } else {
      this.dateCheckOut = date;
      this.#$picker.trigger(this.#eventSelectOut);
    }
    this.#setRangeDate();
  }

  #handlePickerButtonLeftClick() {
    this.#pickerDate.setMonth(this.#pickerDate.getMonth() - 1);
    this.#setPickerDate();
  }

  #handlePickerButtonRightClick() {
    this.#pickerDate.setMonth(this.#pickerDate.getMonth() + 1);
    this.#setPickerDate();
  }

  #handlePickerButtonClearClick() {
    this.counter = 0;
    this.#pickerDate.setTime(this.currentDate);
    this.dateComeIn = this.currentDate;
    this.dateCheckOut = this.currentDate;
    this.#setTitle();
    this.#setPickerDate();
    this.#setRangeDate();
    this.#$picker.trigger(this.#eventClear);
  }

  #handlePickerButtonSubmitClick() {
    this.#$picker.trigger(this.#eventSubmit);
  }

  #setTitle() {
    this.#$headerDate.text(`${this.#months[this.#pickerDate.getMonth()]} ${this.#pickerDate.getFullYear()}`);
  }

  #setRangeDate() {
    this.#$bodyDates.each((i, item) => {
      const $date = $(item);
      const timeStamp = $date.attr('data-timestamp');

      const inRange = (
        timeStamp >= this.dateComeIn
        && timeStamp <= this.dateCheckOut
        && String(this.dateComeIn) !== String(this.dateCheckOut)
      );
      if (inRange) {
        this.#$bodyRanges.eq(i).addClass('date-picker__body-range');
      } else {
        this.#$bodyRanges.eq(i).removeClass('date-picker__body-range');
      }

      const dateSelected = (
        timeStamp === String(this.dateComeIn)
        || timeStamp === String(this.dateCheckOut)
      );
      if (dateSelected) {
        $date.addClass('date-picker__body-date_color_purple');
        if (timeStamp === String(this.dateComeIn)) {
          this.#$bodyRanges.eq(i).attr('data-range', 'first');
        } else {
          this.#$bodyRanges.eq(i).attr('data-range', 'last');
        }
      } else {
        $date.removeClass('date-picker__body-date_color_purple');
        this.#$bodyRanges.eq(i).removeAttr('data-range');
      }

      if (timeStamp === String(this.currentDate)) {
        $date.addClass('date-picker__body-date_color_green');
      } else {
        $date.removeClass('date-picker__body-date_color_green');
      }
    });
  }

  #setPickerDate() {
    const currentDate = new Date(this.#pickerDate);
    const month = currentDate.getMonth();
    currentDate.setDate(1);
    let weekDay = currentDate.getDay();
    if (weekDay === 0) {
      weekDay = 7;
    }
    currentDate.setDate(-weekDay + 1);

    this.#$bodyDates.each((i, item) => {
      const $date = $(item);
      currentDate.setDate(currentDate.getDate() + 1);
      if (currentDate.getMonth() === month) {
        $date.addClass('date-picker__body-date_color_shady');
      } else {
        $date.removeClass('date-picker__body-date_color_shady');
      }
      $date.attr('data-timestamp', currentDate.getTime());
      $date.attr('value', currentDate.getDate());
    });
    this.#setTitle();
    this.#setRangeDate();
  }
}

export default DatePicker;
