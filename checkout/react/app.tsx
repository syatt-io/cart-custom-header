import React from 'react'
import ReactDOM from 'react-dom'
import 'vtex-tachyons'
import Accounts from './component/Accounts';
import AddLoginPrompt from './component/AddLoginPrompt';
import CouponField from './component/CouponField';
import CreateTaxRow from './component/CreateTaxRow';
import Accordion from './component/Accordion';
import Menu from './component/Menu';
import Minicart from './component/Minicart';
import OrderSummaryTitle from './component/OrderSummaryTitle';
import SearchBar from './component/SearchBar';
import Steps from './component/Steps';
import TitleCheckout from './component/TitleCheckout';
import UnitPriceHeading from './component/UnitPriceHeading';
import './styles.scss'
let oldHref = document.location.href;

const App = () => {
   
    ReactDOM.render(<Menu />, document.getElementById('departments'));
    ReactDOM.render(<SearchBar />, document.getElementById('search-bar'));
    ReactDOM.render(<Accounts />, document.getElementById('login'));
    ReactDOM.render(<Minicart />, document.getElementById('cart'));
}

window.addEventListener('DOMContentLoaded', () => {
    App()
    TitleCheckout()
    UnitPriceHeading()
    OrderSummaryTitle()
    CouponField()
    CreateTaxRow()
    Accordion()
    AddLoginPrompt()
    Steps()
})

let bodyList = document.querySelector<HTMLElement | any>("body")
    let observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (oldHref != document.location.href) {
          oldHref = document.location.href;
          TitleCheckout()
          UnitPriceHeading()
          OrderSummaryTitle()
          CouponField()
          CreateTaxRow()
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