import filter from '../../components/filter/filter';
import filterData from '../../components/filter/filter.json';

(function ($){
  const $page = $('.js-page-search-room');

  const $filter = $page.find('.js-filter');
  filter($filter, filterData);
}(window.$))