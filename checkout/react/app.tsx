import AddLoginPrompt from './components/AddLoginPrompt';
import CouponField from './components/CouponField';
import CreateTaxRow from './components/CreateTaxRow';
import Accordion from './component/Accordion';
import OrderSummaryTitle from './components/OrderSummaryTitle';
import Steps from './components/Steps';
import TitleCheckout from './components/TitleCheckout';
import UnitPriceHeading from './components/UnitPriceHeading';
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
