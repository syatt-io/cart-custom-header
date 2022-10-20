import React, { useEffect, useState } from 'react'
import { OrderForm } from '../../interfaces'
import './styles.scss'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let vtexjs: any

const Minicart = () => {
const [count, setCount] = useState(0)
    useEffect(() => {
        const getIsCount = async () => {
          const orderForm: OrderForm =
            window['vtexjs'] && (await vtexjs?.checkout.getOrderForm())
          setCount(orderForm?.items?.length)
        }
        getIsCount()
      }, [count])

    return (
            <a className="cart_link" data-cart-count-display="" href="/checkout/#/cart"><svg xmlns="http://www.w3.org/2000/svg" fill='#fe8c33' width="28" height="21" viewBox="0 0 28 21" className="svg-icon svg-icon--header-cart"><title>Cart</title><path d="M26.848 3.717c.653 0 1.306.557 1.12 1.115l-3.08 8.92H12.574c-.84 0-1.493.558-1.493 1.208 0 .65.653 1.208 1.493 1.208h10.45c1.306 0 2.425 1.022 2.425 2.416 0 1.301-1.12 2.416-2.425 2.416a2.404 2.404 0 01-2.426-2.416c0-.279 0-.465.093-.743h-7.837c.093.278.093.464.093.743 0 1.301-1.12 2.416-2.426 2.416s-2.426-1.115-2.426-2.416c0-.93.467-1.765 1.213-2.137L4.642 2.323H1.19C-.397 2.323-.397 0 1.19 0h4.85c.747 0 .933.558 1.12 1.115l.933 2.602h18.754z" fill-rule="evenodd"></path></svg>
                <span className="header__cart-count">{count}</span>
            </a>
    )
}

export default Minicart