import './img/template-site-logo.svg';
import footer from '../../components/footer/footer';
import footerData from '../../components/footer/footer.json';

(function ($){
  const $footer = $('.js-footer');
  footer($footer, footerData);
}(window.$))
