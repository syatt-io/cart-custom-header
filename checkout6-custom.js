// ejemplo
let orderFormValue
let total

window.showCouponField = () => {
    if (document.querySelector('#coupon').checked === true) {
        document.querySelector('.coupon-form').style.display = 'block'
    }
    document.querySelector('.container-coupon').style.border = 'none'
}

window.emptyCart = () => {
    vtexjs.checkout.removeAllItems().done(function (orderForm) {
        console.log(orderForm)
    })
}

window.activeModalReset = () => {
    document.querySelector('#cartLoadedDiv').insertAdjacentHTML('beforebegin', modal_reset_cart())
    console.log('activo')
}

window.inactiveModalReset = () => {
    document.getElementById('modal-ovelay').remove()
    console.log('inactivo')
}

window.datos = () => {
    var value = ''
    var a = $('#address-1').val()
    var b = $('#ship-street').val()
    'selecciona' == a &&
        ($('#address-2').prop('disabled', !0),
            $('#address-3').prop('disabled', !0),
            $('#address-4').prop('disabled', !0),
            $('#ship-street').val(''))
    $('#address-2').prop('disabled', !1)
    $('#address-3').prop('disabled', !1)
    $('#address-4').prop('disabled', !1)
    $('#address-5').prop('disabled', !1)

    var checked = $('#address-5').attr('checked')
    if (document.getElementById('address-4').value !== '') {
        document.getElementById('ship-street').style.display = 'block'
    } else if (document.getElementById('address-4').value === '') {
        false
    }

    if (checked == 'checked' && 'Calle' == a) {
        value =
            $('#address-1').val() +
            ' ' +
            $('#address-2').val() +
            ' ' +
            $('#address-5').val() +
            ' # ' +
            $('#address-3').val() +
            ' - ' +
            $('#address-4').val()
    } else if (checked == 'checked' && 'Carrera' == a) {
        value =
            $('#address-1').val() +
            ' ' +
            $('#address-2').val() +
            ' # ' +
            $('#address-3').val() +
            ' - ' +
            $('#address-4').val() +
            ' ' +
            $('#address-5').val()
    } else {
        value =
            $('#address-1').val() +
            ' ' +
            $('#address-2').val() +
            ' # ' +
            $('#address-3').val() +
            ' - ' +
            $('#address-4').val()
    }

    if (b.length > 0) {
        $('#ship-street').removeClass('error')
        $('#ship-street').addClass('success')
    }

    var input = document.querySelector('#ship-street')
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
    nativeInputValueSetter.call(input, value)

    var inputEvent = new Event('input', {
        bubbles: true,
    })
    input.dispatchEvent(inputEvent)
}

window.selecType = value => {
    type_selected = 'CÉDULA'
    document.getElementById('client-document-type').value = value
}
// templates start
const back_form = () => {
    return `<div id="header_title">Volver</div>`
}

const modal_reset_cart = () => {
    return `<div id="modal-ovelay" class="modal-ovelay">
            <div class="modal-box">
              <button onclick="inactiveModalReset()" class="modal-box__close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.05721 1.05718C1.57791 0.536482 2.42213 0.536482 2.94283 1.05718L10 8.11437L17.0572 1.05718C17.5779 0.536482 18.4221 0.536482 18.9428 1.05718C19.4635 1.57788 19.4635 2.4221 18.9428 2.9428L11.8856 9.99999L18.9428 17.0572C19.4635 17.5779 19.4635 18.4221 18.9428 18.9428C18.4221 19.4635 17.5779 19.4635 17.0572 18.9428L10 11.8856L2.94283 18.9428C2.42213 19.4635 1.57791 19.4635 1.05721 18.9428C0.536512 18.4221 0.536512 17.5779 1.05721 17.0572L8.1144 9.99999L1.05721 2.9428C0.536512 2.4221 0.536512 1.57788 1.05721 1.05718Z" fill="#2E2E2E"/>
                </svg>
              </button>
              <h3 class="modal-box__title">¡Atención!</h3>
              <p class="modal-box__subtitle">¿Estás seguro que deseas vaciar tu carrito de compras?</p>
             <div class="modal-box__btns">
                <button type="button" class="btns__confirm" onclick="emptyCart()">Confirmar</button>
                <button type="button" class="btns__cancel" onclick="inactiveModalReset()" >Cancelar</button>
             </div>
            </div>
          </div>`
}

const address_custom_shipping = () => {
    return `
  <p class="label-address">Completa la direción de entrega</p>
    <div id="direccion" class="address-container-custom">
      <div class="address-1">
        <select name="address-1" onchange="datos()"id="address-1">
        <option selected disabled value="Complete su dirección de entrega">Selecciona calle, carrera...</option>
        <option value="Calle">Calle</option>
        <option value="Carrera">Carrera</option>
        <option value="Avenida">Avenida</option>
        </select>
      </div>
      <div class="address-2">
        <input type="text" name="address-2" placeholder="Ej: 12B" onchange="datos()"id="address-2" />
      </div>
      <span class="separator">#</span>
      <div class="address-3">
      <input type="text" name="address-3" placeholder="47" onchange="datos()"id="address-3" />
      </div>
      <span class="separator">-</span>
      <div class="address-4">
      <input type="text" name="address-4" placeholder="125" onchange="datos()"id="address-4" />
      </div>
    </div>
  `
}

const selectTypeDocument2 = () => {
    if (document.querySelector('.vtex-omnishipping-1-x-shippingSectionTitle')) {
        document
            .querySelector('.vtex-omnishipping-1-x-shippingSectionTitle')
            .insertAdjacentHTML('beforeend', address_html())
    }
}

const backForm = () => {
    if (document.querySelector('.container-order-form')) {
        document.querySelector('.container-order-form').insertAdjacentHTML('beforeend', back_form())
    }
}

const coupon = () => {
    return `<div class="container-coupon">
  <label class="text-coupon" for="coupon">
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.5 10V15C22.5 20 20.5 22 15.5 22H9.5C4.5 22 2.5 20 2.5 15V9C2.5 4 4.5 2 9.5 2H14.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.5 10H18.5C15.5 10 14.5 9 14.5 6V2L22.5 10Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.5 13H13.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.5 17H11.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <input onchange="showCouponField()" type="checkbox" id="coupon"/>
  Ingresa aquí tu código de descuento
  </label>`
}

const terms_conds = () => {
    return `
    <section class="container-terms-conds">
      <input onchange="validateTermsAndConds()" style="display: none" type="checkbox" id="terms_conds"/>
      <label class="box-terms-conds" for="terms_conds">click</label>
      <label  class="label-terms-conds" for="terms_conds">
      Acepto <a class="link-terms-conds" href="/terminos-y-condiciones">políticas de tratamientos de datos y términos y condiciones</a>.
      </label>
    </section>
  `
}

const back_shop = () => {
    return `<a class="back-shop" href="/">Seguir comprando</a>`
}

const empty_cart = () => {
    return `<button type="button" class="empty_cart" onclick="activeModalReset()">Vaciar el carrito de compras</button>`
}

const select_type_document = () => {
    return `<select class="select-type-document"  onchange="selecType(value)">
            <option selected disabled value="SELECCIONA TIPO DE DOCUMENTO">SELECCIONA TIPO DE DOCUMENTO</option>
            <option value="CÉDULA DE CIUDADANÍA">CÉDULA DE CIUDADANÍA</option>
            <option value="CÉDULA DE EXTRANJERÍA">CÉDULA DE EXTRANJERÍA</option>
            <option value="PASAPORTE">PASAPORTE</option>
            <option value="DNI">DNI</option>
            <option value="TARJETA DE IDENTIDAD">TARJETA DE IDENTIDAD</option>
          </select>`
}
const template_header = () => {
    return `
  <header class="header-custom-container">
  <p class='top-header-checkout'>
    ENVÍO GRATIS POR PAGOS SUPERIORES A $69.900
  </p>
  <div class="header-custom">
    <div class="header-custom__container-image">
      <img class="header-custom__container-image__image" src="https://promociones.lilipink.net/wp-content/uploads/2022/01/logo-color_negocio-digital.png"/>
    </div>
        <header class="header-custom-container">
        <div class="header-custom">
            <span class="header-custom__container-step__line">line</span>
            <div class="header-custom__container-steps__circles">
                <p class="header-custom__container-step__circle">1</p>
                <p class="header-custom__container-step__circle">2</p>
                <p class="header-custom__container-step__circle">3</p>
            </div>
        </div>
        <div class="header-custom">
            <div class="header-custom__container-steps__texts">
                <p class="header-custom__container-step__text">Carrito de compras</p>
                <p class="header-custom__container-step__text">Datos y envío</p>
                <p class="header-custom__container-step__text">Medios de pago</p>
            </div>
        </div>
    </header>
    <div class="header-custom__container-phone">
      <p class="header-custom__container-phone__title">¿Necesitas ayuda?</p>
      <a href="#" class="header-custom__container-phone__number"
        >+57 310 575 6438</a
      >
    </div>
  </div>
</header>
  `
}

const templateHeader = () => {
    if (document.querySelector('.container-order-form')) {
        document.querySelector('#orderform-title').insertAdjacentHTML('beforeend', template_header())
    }
}

const selectTypeDocument = () => {
    if (document.querySelector('.client-document-type')) {
        document.querySelector('.client-document-type').insertAdjacentHTML('afterbegin', select_type_document())
    }
}

const couponForm = () => {
    document.querySelector('.summary-template-holder').insertAdjacentHTML('afterbegin', coupon())
}

const termsConds = () => {
    document.querySelector('.btn-place-order-wrapper').insertAdjacentHTML('afterend', terms_conds())
}

const emptyTrolley = () => {
    if (document.querySelector('.cart-items')) {
        document.querySelector('.cart-items').insertAdjacentHTML('afterend', empty_cart())
    }
}

const toast_send_free = () => {
    return `<div id="toast_free"></div>`
}

const toastSendFree = () => {
    document.querySelector('#orderform-title').insertAdjacentHTML('beforebegin', toast_send_free())
}

const cvv_template = () => {
    return `<input id="creditCardpayment-card-0Code" class="input-mini  success " maxlength="3" autocomplete="off" type="tel" value="234">`
}

const cvv = () => {
    document.querySelector('.PaymentCardDueDate')?.insertAdjacentHTML('beforeend', cvv_template())
}

//PROFILE
const disabledInput = () => (document.querySelector('#client-document').disabled = true)

MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var observer = new MutationObserver(function (_, _) {
    $(window).on('orderFormUpdated.vtex', function (_, orderForm) {
        addVendorInput();
        var num = orderForm.value
        var str = num.toString()
        var orderFormValue = str.substring(0, str.length - 2) + '.' + str.substring(str.length - 2)
        if (document.querySelector('#toast_free')) {
            document.querySelector('#toast_free').innerHTML = `
      <p class='toast ${num > 10000 ? 'free' : 'warning'}'> ${orderFormValue > 100.0 ? 'TIENES ENVÍO GRATIS' : `TE HACEN FALTA $${10000 - num} PARA ENVÍO GRATIS`
                }</p>`
        }
        if (document.querySelector('.AddiPaymentGroup')) {
            document.querySelector('.AddiPaymentGroup').innerHTML = 
            `<div class='container_addi'>
                <img src="https://lilipinkco.vteximg.com.br/arquivos/addi.png"/>
            </div>`
        }
        if (document.querySelector('.SisteCreditoPaymentGroup')) {
            document.querySelector('.SisteCreditoPaymentGroup .payment-description').innerHTML = 
            `<div class='siste-credito'>
                <p>
                    Una vez confirmada la compra, enviaremos tu referencia de pago. 
                    Acércate y cancela en tu punto de pago má cercano. ¡No tardes!
                </p>
            </div>`
        }
    })
})
// end observer

observer.observe(document, {
    subtree: true,
    attributes: true,
})

const buy_button = () => {
    return `<button style="font-weight: 700;" class="submit btn btn-success btn-large btn-block" id="payment-data-submit_2">Comprar<button/>`
}

$(document).ready(function () {
    document.getElementById('orderform-title').addEventListener('click', () => window.history.back())
    setInterval(function () {
        var a = window.location
        var inputStreet = document.getElementById('ship-street')
        // inputStreet.placeholder = "Carrera 10A # 17c Bis Sur";
        inputStreet?.disabled
        a = a.href
        0 == $('#direccion').length &&
            -1 != a.indexOf('shipping') &&
            ($('#ship-street').attr('readonly', 'readonly'), $('.ship-street').prepend(address_custom_shipping()))
    }, 600)

    setInterval(function () {
        if (location.hash === '#/email') {
            document.querySelector('.client-email').style.display = 'block'
        } else {
            document.querySelector('.client-email').style.display = 'none'
        }
    })

    setInterval(function () {
        var a = window.location
        var paymentData = document.getElementById('payment-data')
        paymentData.addEventListener('click', () => { })
        a = a.href

        0 == $('#payment-data-submit_2').length &&
            -1 != a.indexOf('payment') &&
            ($('.payment-body').attr('readonly', 'readonly'), $('.payment-body').append(buy_button())),
            $('#payment-group-customPrivate_501PaymentGroup').html(
                '<span class="payment-group-item-text" data-bind="i18n: localizedLabel, css: customStyle">Tarjeta codensa</span>'
            )
        $('#payment-group-creditCardPaymentGroup').html(
            '<span class="payment-group-item-text" data-bind="i18n: localizedLabel, css: customStyle">Tarjeta crédito</span>'
        )
        $('#payment-group-debitCardPaymentGroup').html(
            '<span class="payment-group-item-text" data-bind="i18n: localizedLabel, css: customStyle">Tarjeta débito</span>'
        )
    }, 600)

    if (document.querySelectorAll('.client-profile-data')) {
        document.querySelectorAll('.client-profile-data')[1]
        $('#creditCardpayment-card-0Code').appendTo($('.PaymentCardDueDate'));
        console.log('.client-profile-data: ', $('.client-profile-data')[11])
    }

    setInterval(function () {
        $('.pg-efecty').each(function () {
            $(this)
                .find('.payment-group-item-text')
                .text('Efecty')
        })
    })

    setInterval(function () {
        $('.pg-banco-agrario').each(function () {
            $(this)
                .find('.payment-group-item-text')
                .text('PSE')
        })
    })
    setInterval(() => {
        $('#client-email').attr('placeholder', 'Ingresa tu email')
        $('#client-first-name').attr('placeholder', 'Ingresa tus nombres')
        $('#client-last-name').attr('placeholder', 'Ingresa tus apellidos')
        $('#client-phone').attr('placeholder', 'Ingresa tu teléfono')
        $('#client-new-document').attr('placeholder', 'Ingresa tu documento')
    }, 6000)
}, 600)

function getSocialSellingCode() {
    let sscode = vtexjs.checkout.orderForm.marketingData.utmiCampaign;
    return sscode;
}

function showSocialSellingCode() {
    let sscode = getSocialSellingCode();
    if (sscode != null) {
        $('.vendor-input .vendor-code-input, .vendor-code-add').hide();
        if ($('.vendor-code-current').length == 0) {
            $(
                `<span class="vendor-code-current">${sscode}<a id="vendor-code-remove" class="ml2 pointer">Borrar</a></span>`
            ).appendTo('p.vendor-input');
        } else {
            $('.vendor-code-current').text(sscode);
            if ($('.vendor-code-remove').length == 0) {
                $('<a class="vendor-code-remove ml2 pointer">Borrar</a>').appendTo('.vendor-code-current');
            }
        }
    } else {
        restoreSocialSellingInput();
    }
}

function restoreSocialSellingInput() {
    $('.vendor-input .vendor-code-input, .vendor-code-add').show();
    $('.vendor-code-current').remove();
    $('.vendor-input .vendor-code-input').val('');
}

function addVendorInput() {
    let html =
        `<div class="vendor-code pv4 db">
        <label for="seller">¿Tienes un código de vendedor/a?</label>
        <div class="container-input">
        <input class="vendor-input flex items-end" required maxlength="50" class="mr3 vendor-code-input" type="text" placeholder="Código del Vendedor" value="" />
        <button class="vendor-code-add bg-yellow bn hover-bg-black hover-white pv2 ph4 f6 Barlow-Bold">Aplicar</button>
        </div>
      </div>`;
    if ($('.cvv').length == 0) {
        $(`<p class="cvv">text</p>`).appendTo('.PaymentCardDueDate');
    }
    if ($('.cvv').length == 0) {
        $('.PaymentCardDueDate').before(`<p class="cvv">text</p>`)
        $(`<p class="cvv">text</p>`).appendTo('.PaymentCardDueDate');
    }
    if ($('.orderform-template .vendor-code').length == 0) {
        $(html).appendTo('.coupon-column');
    }
    if ($('.content-title').length == 0) {
        $('.orderform-template-holder').before(`<div class="content-title"><a href="#/cart">Volver al carrito de compras</a><p class="title-box">Datos y medio de pago</p></div>`)
    }

    setTimeout(() => {
        showSocialSellingCode();
    }, 400);
}

$(window).on('orderFormUpdated.vtex', function () {
    document.querySelectorAll('#payment-group-MercadoPagoOffPaymentGroup')
    if (location.hash == '#/cart') {
        addVendorInput();
        $('.vendor-code').css('margin-top', '12px')
    }
    if (location.hash !== '#/cart') {
        console.log('#/payment')
        $('.vendor-code').css('margin-top', '105px')
    }
    if(location.hash === '#/cart') {
        $('.cart_steps__item').addClass('active')
    } 
    if(location.hash === '#/profile'){
        $('.cart_steps__item').addClass('active')
        $('.profile_steps__item').addClass('active')  
    } 
    if(location.hash === '#/payment'){
        $('.cart_steps__item').addClass('active')
        $('.profile_steps__item').addClass('active')  
        $('.payment_steps__item').addClass('active')  
       }
});

$(window).on('hashchange', function () {

    if (location.hash == '#/cart') {
        lastCheckoutPage = '';
        addVendorInput();

    }
    if (location.hash == '#/email') {
        lastCheckoutPage = 'email';
        console.log("email")

    }
    if (location.hash == '#/profile') {
        lastCheckoutPage = '';
        //  $('.client-pre-email-h').css({padding: '0 0 0 24px'})
    }
    if (location.hash == '#/shipping') {
        lastCheckoutPage = '';
        $('.vtex-omnishipping-1-x-leanShippingOption').css({ backgroundColor: '#EAF4FF' })
        $('.vtex-omnishipping-1-x-leanShippingOption').attr('style', 'background-color: #EAF4FF !important')
    }
    if (location.hash == '#/payment') {
        console.log("odsds payment")
        if (lastCheckoutPage == 'email') {
            $('#edit-shipping-data')[0].click();
        }
        lastCheckoutPage = '';
        addVendorInput();

    }

});

//INPUT CODIGO DE VENDEDOR
$('.vendor-code-add').live('click', function (e) {
    e.preventDefault();
    let utmi = $(this).siblings('.vendor-code-input').val();
    if (utmi.length <= 50 && utmi != '') {
        vtexjs.checkout
            .getOrderForm()
            .then(function (orderForm) {
                var marketingData = orderForm.marketingData;
                marketingData = {
                    utmiCampaign: utmi,
                    utmSource: 'social-selling-lilipink',
                };
                return vtexjs.checkout.sendAttachment('marketingData', marketingData);
            })
            .done(function (orderForm) {
                $('.vendor-code-input').each(function (index, element) {
                    // element == this
                    $(element).val(utmi);
                });
            });
    } else {
        console.log('Invalid Vendor Code');
    }
    setTimeout(() => {
        showSocialSellingCode();
    }, 4000);
});

window.addEventListener('load', function () {
    document.getElementById('orderform-title').addEventListener('click', () => window.history.back())
    selectTypeDocument2()
    disabledInput()
    emptyTrolley()
    empty_cart()
    select_type_document()
    selectTypeDocument()
    address_custom_shipping()
    toastSendFree()
    toast_send_free()
    cvv_template()
    cvv()
})
