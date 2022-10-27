
const TitleCheckout = () => {
  if (!document.querySelector('.heading')) {
    const heading = document.createElement('h1')
    heading.classList.add('heading');
    heading.textContent = 'Your Cart'
    const headingHtml = document.getElementsByClassName('checkout-container')[0]
    headingHtml.prepend(heading)
  }
}

export default TitleCheckout