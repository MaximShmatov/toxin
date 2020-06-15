'use strict'

import('./__date/__date');
import('./__comfort/__comfort');
import('./__checkbox/__checkbox');
import('./__room/__room');
import('../dropdown/dropdown');
import('./filter.sass');

let $dropdownOut = $('.dropdown').find('.dropdown__head-out');
$dropdownOut.val(sessionStorage.getItem('guests'));