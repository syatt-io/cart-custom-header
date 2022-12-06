import AddLoginPrompt from './component/AddLoginPrompt';
import CouponField from './component/CouponField';
import CreateTaxRow from './component/CreateTaxRow';
import Accordion from './component/Accordion';
import OrderSummaryTitle from './component/OrderSummaryTitle';
import Steps from './component/Steps';
import TitleCheckout from './component/TitleCheckout';
import UnitPriceHeading from './component/UnitPriceHeading';
import './styles.scss'
let oldHref = document.location.href;

const App = () => {console.log('linked Checkout from App')}

window.addEventListener('DOMContentLoaded', () => {
  App()
  TitleCheckout()
  UnitPriceHeading()
  OrderSummaryTitle()
  CreateTaxRow()
  CouponField()
  Accordion()
  AddLoginPrompt()
  Steps()
})


let bodyList = document.querySelector<HTMLElement | any>("body")
    let observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (oldHref != document.location.href) {
          oldHref = document.location.href;
          App()
          TitleCheckout()
          UnitPriceHeading()
          OrderSummaryTitle()
          CreateTaxRow()
          CouponField()
          Accordion()
          AddLoginPrompt()
          Steps()
        }
      });
    });

    var config = {
      childList: true,
      subtree: true
    };

    observer.observe(bodyList, config);
