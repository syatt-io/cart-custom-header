import React from 'react'
import ReactDOM from 'react-dom'
import 'vtex-tachyons'
import Accounts from './component/Accounts';
import InsertTemplateDom from './component/InsertTemplateDom';
import Menu from './component/Menu';
import Minicart from './component/Minicart';
import SearchBar from './component/SearchBar';

import './styles.scss'

const App = () => {
    ReactDOM.render(<Menu />, document.getElementById('departaments'));
    ReactDOM.render(<SearchBar />, document.getElementById('search-bar'));
    ReactDOM.render(<Accounts />, document.getElementById('login'));
    ReactDOM.render(<Minicart />, document.getElementById('cart'));
}

window.addEventListener('DOMContentLoaded', () => {
    App()
   // InsertTemplateDom()
})