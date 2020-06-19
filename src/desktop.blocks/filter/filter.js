'use strict'

import('../date-filter/date-filter');
import('./__comfort/__comfort');
import('./__checkbox/__checkbox');
import('./__room/__room');
import('../dropdown-guests/dropdown-guests');
import('./filter.sass');

let $dropdownOut = $('.dropdown-guests').find('.dropdown__head-out');
$dropdownOut.val(sessionStorage.getItem('guests'));