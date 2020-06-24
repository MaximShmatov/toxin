'use strict'

import '../date-filter/date-filter';
import './__comfort/__comfort';
import '../checkbox/checkbox';
import './__room/__room';
import '../dropdown-quantity/dropdown-quantity';
import './filter.sass';

let $dropdownOut = $('.dropdown-quantity').find('.dropdown__head-out');
$dropdownOut.val(sessionStorage.getItem('guests'));