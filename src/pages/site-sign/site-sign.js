import formComeIn from '../../components/form-come-in/form-come-in';
import formComeInData from '../../components/form-come-in/form-come-in.json';

(function ($){
  const $page = $('.js-page-sign-in');

  const $formComeIn = $page.find('.js-form-come-in');
  formComeIn($formComeIn, formComeInData);
}(window.$))