

const OrderSummaryTitle = () => {
    if (!document.querySelector('.order-summary')) {
        const orderSummary = document.createElement('h2')
        orderSummary.classList.add('order-summary')
        orderSummary.textContent = 'Order Summary'
        document.querySelector('.accordion-inner')?.prepend(orderSummary)
      }
}

export default OrderSummaryTitle
