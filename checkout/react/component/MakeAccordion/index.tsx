
const MakeAccordion = () => {
    //@ts-ignore
    if (window.location.hash !== '#/profile' || window.location.hash !== '#/email') {
        const accordionBox = document.createElement('div')
        accordionBox.classList.add('accordion-box')

        const accordionButtonBox = document.createElement('div')
        accordionButtonBox.classList.add('accordion-button-box')

        const accordionButton = document.createElement('button')
        accordionButton.classList.add('accordion')
        const accordionText = document.createElement('p')
        accordionText.textContent = 'Show order summary'

        const toggleDiv = document.createElement('div')
        const toggleImage = document.createElement('span')
        toggleImage.classList.add('arrow')
        toggleImage.classList.add('up')
        toggleDiv.appendChild(toggleImage)

        accordionButton.appendChild(accordionText)
        accordionButton.appendChild(toggleDiv)

        const totalAmount = document.querySelector<HTMLElement | any>('.new-product-price')?.innerText
        const totalAmountText = document.createElement('div')
        totalAmountText.textContent = totalAmount
        totalAmountText.classList.add('total-amount-text')

        accordionButtonBox.appendChild(accordionButton)
        accordionButtonBox.appendChild(totalAmountText)

        const accordionPanel = document.querySelector<HTMLElement | any>('.accordion-inner') 
        accordionPanel?.classList.add('panel')

        accordionBox.appendChild(accordionButtonBox)
        accordionBox.appendChild(accordionPanel)

        document.querySelector('.summary-template-holder')?.prepend(accordionBox)

        accordionButton.addEventListener('click', function() {

            accordionButton.classList.toggle('active')
            toggleImage.classList.toggle('down')

            if (accordionButton.classList.contains('active')) {
              accordionPanel.style.display = 'block'
              totalAmountText.style.display = 'none'
              accordionText.textContent = 'Hide order summary'
            } else {
              accordionPanel.style.display = 'none'
              totalAmountText.style.display = 'block'
              accordionText.textContent = 'Show order summary'
            }
          });

        // Create modal

        const quoteButton = document.createElement('button')
        quoteButton.textContent = 'Need a quote?'
        quoteButton.classList.add('quote-button')

        const modal = document.createElement('div')
        modal.classList.add('quote-modal')

        const modalContent = document.createElement('div')
        modalContent.classList.add('modal-content')

        modal.appendChild(modalContent)

        const closeIcon = document.createElement('span')
        closeIcon.classList.add('close-icon')

        const modalText = document.createElement('p')
        modalText.classList.add('modal-text')
        modalText.innerHTML = 'To request a quote, simply add the desired items to your cart and continue to checkout. Once at the final payment screen, you will have the option to <b>“REQUEST AN OFFICIAL QUOTE"</b> (if required) or select a payment method and <b>“PLACE ORDER”</b>.'

        modalContent.appendChild(closeIcon)
        modalContent.appendChild(modalText)

        document.querySelector<HTMLElement | any>('.cart-links-bottom').appendChild(quoteButton)
        document.querySelector<HTMLElement | any>('body').prepend(modal)

        // Modal functionality

        quoteButton.onclick = function() {
          modal.style.display = 'flex'
        }

        closeIcon.onclick = function() {
          modal.style.display = 'none'
        }

        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = 'none'
          }
        }
      }
}

export default MakeAccordion