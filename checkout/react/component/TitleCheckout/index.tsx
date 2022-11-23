
const TitleCheckout = () => {
  if (!document.querySelector('.heading')) {
    const heading = document.createElement('h1')
    heading.classList.add('heading');
    heading.textContent = 'Your Cart'
    const headingHtml = document.querySelector('.checkout-container')
    headingHtml?.prepend(heading)
  }
}

export default TitleCheckout
