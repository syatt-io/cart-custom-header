
const UnitPriceHeading = () => {
    const unitTh = document.createElement('th')
    unitTh.innerHTML = 'Unit Price'
    unitTh.classList.add('unit-price')
    const quantityTh = document.querySelector('th.quantity')
    quantityTh?.parentNode?.insertBefore(unitTh, quantityTh)
}

export default UnitPriceHeading