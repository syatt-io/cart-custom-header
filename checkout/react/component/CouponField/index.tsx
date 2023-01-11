const CouponField = () => {
  if (!document.querySelector('.discount-row')) {
    $("#cart-coupon").attr("placeholder", "Type your answer here");

    const discountRow = document.createElement('tr')
    const couponFieldTd = document.createElement('td')
    const discountTd = document.createElement('td')
    discountTd.innerText = 'Discount'
    discountTd.classList.add('discount')
    const couponForm = document.querySelector(
      '.coupon.summary-coupon.pull-right'
    )
    //@ts-ignore
    couponFieldTd.appendChild(couponForm)
    discountRow.classList.add('discount-row')
    discountRow.appendChild(discountTd)
    discountRow.appendChild(couponFieldTd)
    document.querySelector('.totalizers-list')?.appendChild(discountRow)
  }
}

export default CouponField
