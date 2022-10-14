import React from 'react'
import ReactDOM from 'react-dom'
import 'vtex-tachyons'
import Menu from './component/Menu';

const App = () => {
    ReactDOM.render(<Menu />, document.getElementById('departaments'));    
}

window.addEventListener('DOMContentLoaded', () => {
    App()
})