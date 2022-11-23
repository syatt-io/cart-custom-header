

const AddLoginPrompt = () => {
  const heading = document.querySelector<HTMLElement | any>('.heading')
    if (window.location.hash === '#/profile' ||
        window.location.hash === '#/email' ||
        window.location.hash === '#/shipping' ||
        window.location.hash === '#/payment') {
        heading.style.display = 'none'

        const checkoutContainer = document.querySelector<HTMLElement | any>('.client-profile-data')
        //@ts-ignore
        if (!document.querySelector('.account-login-text') && !window?.API?.orderForm?.loggedIn) {
            const loginLink = document.createElement<HTMLElement | any>('div')
            loginLink.classList.add('login-box')
            loginLink.innerHTML = '<h2 class="account-login-text">Already have an account?</h2><a class="login-link" href="/login?return_to=%2Fcheckout">Log in</a>'
            checkoutContainer.insertBefore(loginLink, checkoutContainer.children[0])
        }

        // Order summary box
        const orderSummaryList = document.querySelectorAll<HTMLElement | any>('.totalizers-list')[1]
        orderSummaryList.appendChild(document.querySelector('.discount-row'))

        const progressBar = `
        <div class="checkout-content__progress">
            <nav class="progress-bar progress--checkout" role="complementary">
            <div class="progress__step first progress__step--active">
                <span class="progress__link"><span class="progress__step-number">1.</span>
                <span class="progress__step-name">Contact Information</span>
                </span>
                <div class="progress__node">
                </div>
            </div>
            <div class="progress__step second">
                <span class="progress__link"><span class="progress__step-number">2.</span>
                <span class="progress__step-name">Delivery Options</span>
                </span>
                <div class="progress__node">
                </div>
            </div>
            <div class="progress__step third">
                <span class="progress__link">
                <span class="progress__step-number">3.</span>
                <span class="progress__step-name">Payment</span>
                </span>
                <div class="progress__node"></div>
            </div>
            </nav>
        </div>
  `

        if (!document.querySelector('.progress-box')) {
            const progressDiv = document.createElement('div')
            progressDiv.classList.add('progress-box')
            progressDiv.innerHTML = progressBar
            checkoutContainer.insertBefore(progressDiv, checkoutContainer.children[0])
        }
    }
    else {
      heading.style.display = 'block'
    }
}

export default AddLoginPrompt
