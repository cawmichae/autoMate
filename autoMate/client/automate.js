(function () {
  function deleteAllCookies() {
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf('=');
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      const COOKIE = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
      console.log('Kill Cookie', COOKIE);
    }
  }

  deleteAllCookies();
  localStorage.clear();
  console.log('ls', localStorage.valueOf());
  console.log('Automate Loaded');

  const L = {
    FIRST_PRODUCT: `cx-carousel > .carousel-panel > .slides > .slide.active .active a`,
    PICKUP_OPTIONS_RADIO_PICKUP: `[data-pickup=pickup]`,
    SAP_ICON_HOME_LINK: `.SiteLogo cx-banner cx-generic-link a`,
    USE_MY_LOCATION: '#lnkUseMyLocation',
    ACTIVE_PICK_UP_IN_STORE_BUTTON: `div.cx-store-pick-up-from-here button[data-pickup-in-store-button]:not([disabled])`,
    ADD_TO_CART: 'span[aria-label="Add to cart"]',
    PROCEED_TO_CHECKOUT_BUTTON: `cx-added-to-cart-dialog a.btn-secondary`,
    REGISTER_BUTTON: `cx-login-register a`,
    FORM_FIRSTNAME: `input[formcontrolname=firstName]`,
    FORM_LASTNAME: `input[formcontrolname=lastName]`,
    FORM_EMAIL: `input[name=email]`,
    FORM_PASSWORD: `input[name=password]`,
    FORM_CONFIRM_PASSWORD: `input[name=confirmpassword]`,
    FORM_NEWSLETTER: `input[name=newsletter]`,
    FORM_TANDC: `input[name=termsandconditions]`,
    SUBMIT_REGISTRATION_FORM: `button[type=submit]`,
    SIGNIN_USERNAME: `input[formcontrolname="userId"]`,
    SIGNIN_PASSWORD: `input[formcontrolname="password"]`,
    SIGN_IN_BUTTON: `button[type=submit].btn-primary`,
    ADDRESS_FORM_COUNTRY: '#country-select .ng-select-container',
    ADDRESS_FORM_COUNTRY_OPTION: '#country-select .ng-option:nth-of-type(4)',
    ADDRESS_FORM_TITLE: '#title-select .ng-select-container',
    ADDRESS_FORM_TITLE_OPTION: '#title-select .ng-option:nth-of-type(2)',
    ADDRESS_FORM_LINE_1: '[formcontrolname="line1"]',
    ADDRESS_FORM_LINE_2: '[formcontrolname="line2"]',
    ADDRESS_FORM_TOWN: '[formcontrolname="town"]',
    ADDRESS_FORM_POSTAL_CODE: '[formcontrolname="postalCode"]',
    ADDRESS_FORM_PHONE: '[formcontrolname="phone"]',
    ADDRESS_CONTINUE_BUTTON: '.cx-address-form-btns button[type=submit]',
    DELIVERY_MODE_CONTINUE_BUTTON: 'cx-delivery-mode button.btn-primary',
    CREATE_ACOUNT_REGISTER_BUTTON: '.AccountPageTemplate button[type=submit]',
    LOGIN_USERNAME: 'input[type=email]',
    LOGIN_PASSWORD: 'input[type=password]',
    LOGIN_SIGNIN_BUTTON: 'button[type=submit]',
    ALLOW_COOKIES_BUTTON: '.anonymous-consent-banner button.btn-primary',
    SIGN_IN_LINK: 'cx-login a',
    MY_ACCOUNT: 'button[aria-label=My Account]',
    PAYMENT_DETAILS_CARD: '#card-type-select .ng-select-container',
    PAYMENT_DETAILS_CARD_OPTION: '#card-type-select .ng-option:nth-of-type(4)',
    ACCOUNT_HOLDER_NAME: 'input[formcontrolname=accountHolderName]',
    CARD_NUMBER: 'input[formcontrolname=cardNumber]',
    CARD_MONTH: '#month-select .ng-select-container',
    CARD_MONTH_OPTION: '#month-select .ng-option:nth-of-type(4)',
    CARD_YEAR: '#year-select .ng-select-container',
    CARD_YEAR_OPTION: '#year-select .ng-option:nth-of-type(4)',
    CARD_CVV: '[formcontrolname="cvn"]',
    CARD_CONTINUE_BUTTON: 'cx-payment-form button[type=submit]',
  };

  const EMAIL_ADDRESS = `${new Date().getTime()}@test.com`;
  const PASSWORD = 'Password+1234';

  function waitForElement(selector) {
    console.log(
      '	Get element from selector:',
      `document.querySelector('${selector}')`,
    );
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver((mutations) => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }

  {
    async function runJourney() {
      console.log('runJourney');
      let element;

      element = await waitForElement(L.SAP_ICON_HOME_LINK);
      console.log('Click on Home Icon');
      element.click();

      element = await waitForElement(L.FIRST_PRODUCT);
      console.log('Click on First Product');
      element.click();

      element = await waitForElement(L.PICKUP_OPTIONS_RADIO_PICKUP);
      console.log('Click on Pick Up Options radio button');
      element.click();

      element = await waitForElement(L.USE_MY_LOCATION);
      console.log('Click on Use My Location');
      element.click();

      element = await waitForElement(L.ACTIVE_PICK_UP_IN_STORE_BUTTON);
      console.log('Click on Pick Up In Store radio button');
      element.click();

      element = await waitForElement(L.ADD_TO_CART);
      console.log('Click on Add To Cart');
      element.click();

      element = await waitForElement(L.PROCEED_TO_CHECKOUT_BUTTON);
      console.log('Click on Proceed To Checkout button', element);
      element.click();

      element = await waitForElement(L.REGISTER_BUTTON);
      console.log('Click on Register button', element);
      element.click();

      element = await waitForElement(L.ADDRESS_FORM_TITLE);
      console.log('Click Title ng select', element);
      element.dispatchEvent(new Event('mousedown'));

      element = await waitForElement(L.ADDRESS_FORM_TITLE_OPTION);
      console.log('Click an Option on Title ng select', element);
      element.click();

      element = await waitForElement(L.FORM_FIRSTNAME);
      console.log('Set first name and fire input event');
      element.value = 'John';
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.FORM_LASTNAME);
      console.log('Set last name and fire input event');
      element.value = 'Smith';
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.FORM_EMAIL);
      console.log('Set Email and fire input event');
      element.value = EMAIL_ADDRESS;
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.FORM_PASSWORD);
      console.log('Set Password and fire input event');
      element.value = PASSWORD;
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.FORM_CONFIRM_PASSWORD);
      console.log('Set Confirm Password and fire input event');
      element.value = PASSWORD;
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.FORM_TANDC);
      console.log('Click T and C');
      element.click();

      element = await waitForElement(L.FORM_NEWSLETTER);
      console.log('Click Newsletter');
      element.click();

      element = await waitForElement(L.CREATE_ACOUNT_REGISTER_BUTTON);
      console.log('Click Register Button');
      element.click();

      element = await waitForElement(L.LOGIN_USERNAME);
      console.log('Enter username');
      element.value = EMAIL_ADDRESS;
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.LOGIN_PASSWORD);
      console.log('Enter password');
      element.value = PASSWORD;
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.LOGIN_SIGNIN_BUTTON);
      console.log('Click Sign In Button');
      element.click();

      element = await waitForElement(L.ADDRESS_FORM_COUNTRY);
      console.log('Click Country ng select', element);
      element.dispatchEvent(new Event('mousedown'));

      element = await waitForElement(L.ADDRESS_FORM_COUNTRY_OPTION);
      console.log('Click an Option on Country ng select', element);
      element.click();

      element = await waitForElement(L.ADDRESS_FORM_TITLE);
      console.log('Click Title ng select', element);
      element.dispatchEvent(new Event('mousedown'));

      element = await waitForElement(L.ADDRESS_FORM_TITLE_OPTION);
      console.log('Click an Option on Title ng select', element);
      element.click();

      element = await waitForElement(L.FORM_FIRSTNAME);
      console.log('Set Firstname and fire input event');
      element.value = 'John';
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.FORM_LASTNAME);
      console.log('Set Lastname and fire input event');
      element.value = 'Smith';
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.ADDRESS_FORM_LINE_1);
      console.log('Set Address Line 1 and fire input event');
      element.value = '1';
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.ADDRESS_FORM_LINE_2);
      console.log('Set Address Line 2 and fire input event');
      element.value = 'High Street';
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.ADDRESS_FORM_TOWN);
      console.log('Set Town and fire input event');
      element.value = 'Townsville';
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.ADDRESS_FORM_POSTAL_CODE);
      console.log('Set Postcode and fire input event');
      element.value = '123456';
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.ADDRESS_FORM_PHONE);
      console.log('Set Phone and fire input event');
      element.value = '555-1234-456';
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.ADDRESS_CONTINUE_BUTTON);
      console.log('Click Continue Button on Delivery Address', element);
      element.click();

      element = await waitForElement(L.DELIVERY_MODE_CONTINUE_BUTTON);
      console.log('Click Continue Button on Delivery Mode', element);
      element.click();

      element = await waitForElement(L.PAYMENT_DETAILS_CARD);
      console.log('Click Payment Options', element);
      element.dispatchEvent(new Event('mousedown'));

      element = await waitForElement(L.PAYMENT_DETAILS_CARD_OPTION);
      console.log('Click an Option on Payment ng select', element);
      element.click();

      element = await waitForElement(L.ACCOUNT_HOLDER_NAME);
      console.log('Set Account Holder Name and fire input event');
      element.value = 'John Smith';
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.CARD_NUMBER);
      console.log('Set Card Number and fire input event');
      element.value = '4111111111111111';
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.CARD_MONTH);
      console.log('Click Card Month', element);
      element.dispatchEvent(new Event('mousedown'));

      element = await waitForElement(L.CARD_MONTH_OPTION);
      console.log('Click an Option on Card Month ng select', element);
      element.click();

      element = await waitForElement(L.CARD_YEAR);
      console.log('Click Card Year', element);
      element.dispatchEvent(new Event('mousedown'));

      element = await waitForElement(L.CARD_YEAR_OPTION);
      console.log('Click an Option on Card Year ng select', element);
      element.click();

      element = await waitForElement(L.CARD_CVV);
      console.log('Set Card CVV and fire input event');
      element.value = '123';
      element.dispatchEvent(new Event('input'));

      element = await waitForElement(L.CARD_CONTINUE_BUTTON);
      console.log('Click Payment Details Submit', element);
      element.click();
    }

    runJourney();
    return;
  }
})();
