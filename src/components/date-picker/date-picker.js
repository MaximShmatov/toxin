class DatePicker {
  #$picker;

  #$title;

  #$bodyDates;

  #$bodyRanges;

  #evtClear = 'datepicker.clear';

  #evtSubmit = 'datepicker.submit';

  #evtSelectIn = 'datepicker.select.in';

  #evtSelectOut = 'datepicker.select.out';

  #pickerDate = new Date();

  #monthYear = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябр', 'Октябрь', 'Ноябрь', 'Декабрь'];

  #dateComeInBefore;

  #dateCheckOutBefore;

  #currentDate = this.#pickerDate.getTime();

  dateComeIn = this.#currentDate.toString();

  dateCheckOut = this.#currentDate.toString();

  counter = 0;

  constructor($component) {
    this.#$picker = $component.find('.js-date-picker');
    this.#setAreas();
    this.#setHandles();
    this.#setPickerDate();
  }

  #setAreas() {
    this.#$title = this.#$picker.find('.js-date-picker__head-title');
    this.#$bodyRanges = this.#$picker.find('.js-date-picker__body-range');
    this.#$bodyDates = this.#$picker.find('.js-date-picker__body-date');
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

  #handlePickerBodyClick(evt) {
    switch (this.counter) {
      case 0:
        this.#dateComeInBefore = this.dateComeIn;
        this.dateComeIn = evt.currentTarget.getAttribute('data-timestamp');
        this.#setRangeDate();
        this.counter += 1;
        this.#$picker.trigger(this.#evtSelectIn);
        break;
      case 1:
        this.#dateCheckOutBefore = this.dateCheckOut;
        this.dateCheckOut = evt.currentTarget.getAttribute('data-timestamp');
        this.#setRangeDate();
        this.counter -= 1;
        this.#$picker.trigger(this.#evtSelectOut);
        break;
      default:
    }
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
    this.#pickerDate.setTime(this.#currentDate);
    this.dateComeIn = this.#currentDate;
    this.dateCheckOut = this.#currentDate;
    this.#setTitle();
    this.#setPickerDate();
    this.#setRangeDate();
    this.#$picker.trigger(this.#evtClear);
  }

  #handlePickerButtonSubmitClick() {
    this.#$picker.trigger(this.#evtSubmit);
  }

  #setTitle() {
    this.#$title.text(`${this.#monthYear[this.#pickerDate.getMonth()]} ${this.#pickerDate.getFullYear()}`);
  }

  #setRangeDate() {
    this.#$bodyDates.each((i, item) => {
      const $date = window.$(item);
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
        $date.addClass('date-picker__body-date_selected');
        if (timeStamp === String(this.dateComeIn)) {
          this.#$bodyRanges.eq(i).attr('data-range', 'first');
        } else {
          this.#$bodyRanges.eq(i).attr('data-range', 'last');
        }
      } else {
        $date.removeClass('date-picker__body-date_selected');
        this.#$bodyRanges.eq(i).removeAttr('data-range');
      }

      if (timeStamp === String(this.#currentDate)) {
        $date.addClass('date-picker__body-date_current');
      } else {
        $date.removeClass('date-picker__body-date_current');
      }
    });
  }

  #setPickerDate() {
    const dateCurrent = new Date(this.#pickerDate);
    const month = dateCurrent.getMonth();
    dateCurrent.setDate(1);
    let weekDay = dateCurrent.getDay();
    if (weekDay === 0) {
      weekDay = 7;
    }
    dateCurrent.setDate(-weekDay + 1);

    this.#$bodyDates.each((i, item) => {
      const $date = window.$(item);
      dateCurrent.setDate(dateCurrent.getDate() + 1);
      if (dateCurrent.getMonth() === month) {
        $date.addClass('date-picker__body-date_day-month');
      } else {
        $date.removeClass('date-picker__body-date_day-month');
      }
      $date.attr('data-timestamp', dateCurrent.getTime());
      $date.attr('value', dateCurrent.getDate());
    });
    this.#setTitle();
    this.#setRangeDate();
  }
}

export default DatePicker;
