class DatePicker {
  #$picker;

  #$headerDate;

  #$bodyDates;

  #$bodyRanges;

  #evtClear = 'datepicker.clear';

  #evtSubmit = 'datepicker.submit';

  #evtSelectIn = 'datepicker.select.in';

  #evtSelectOut = 'datepicker.select.out';

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

  #handlePickerBodyClick(evt) {
    const date = evt.currentTarget.getAttribute('data-timestamp');
    if (this.currentDate >= Number(date)) {
      this.dateComeIn = this.currentDate.toString();
      this.#$picker.trigger(this.#evtSelectIn);
    } else if (this.dateCheckOut >= Number(date)) {
      this.dateComeIn = date;
      this.#$picker.trigger(this.#evtSelectIn);
    } else {
      this.dateCheckOut = date;
      this.#$picker.trigger(this.#evtSelectOut);
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
    this.#$picker.trigger(this.#evtClear);
  }

  #handlePickerButtonSubmitClick() {
    this.#$picker.trigger(this.#evtSubmit);
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

      if (timeStamp === String(this.currentDate)) {
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
      const $date = $(item);
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
