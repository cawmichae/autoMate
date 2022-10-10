(function () {
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
    FORM_FIRSTNAME: `input[name=firstname]`,
    FORM_LASTNAME: `input[name=lastname]`,
    FORM_EMAIL: `input[name=email]`,
    FORM_PASSWORD: `input[name=password]`,
    FORM_CONFIRM_PASSWORD: `input[name=confirmpassword]`,
    FORM_NEWSLETTER: `input[name=newsletter]`,
    FORM_TANDC: `input[name=termsandconditions]`,
    SUBMIT_REGISTRATION_FORM: `button[type=submit]`,
    SIGNIN_USERNAME: `input[formcontrolname="userId"]`,
    SIGNIN_PASSWORD: `input[formcontrolname="password"]`,
    SIGN_IN_BUTTON: `button[type=submit].btn-primary`,
    SELECT: 'ng-select',
  };

  const EMAIL_ADDRESS = `${new Date().getTime()}@test.com`;
  const PASSWORD = 'Password+1234';

  function waitForElement(selector) {
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
    waitForElement(L.SAP_ICON_HOME_LINK)
      .then((element) => {
        console.log('Click on Home Icon');
        element.click();
        return waitForElement(L.FIRST_PRODUCT);
      })
      .then((element) => {
        console.log('Click on First Product');
        element.click();
        return waitForElement(L.PICKUP_OPTIONS_RADIO_PICKUP);
      })
      .then((element) => {
        console.log('Click on Pick Up Options radio button');
        element.click();
        return waitForElement(L.USE_MY_LOCATION);
      })
      .then((element) => {
        console.log('Click on Use My Location');
        element.click();
        return waitForElement(L.ACTIVE_PICK_UP_IN_STORE_BUTTON);
      })
      .then((element) => {
        console.log('Click on Pick Up In Store radio button');
        element.click();
        return waitForElement(L.ADD_TO_CART);
      })
      .then((element) => {
        console.log('Click on Add To Cart');
        element.click();
        return waitForElement(L.PROCEED_TO_CHECKOUT_BUTTON);
      })
      .then((element) => {
        console.log('Click on Proceed To Checkout button');
        element.click();
        return waitForElement(L.REGISTER_BUTTON);
      })
      .then((element) => {
        console.log('Click on Register button');
        element.click();
        return waitForElement(L.FORM_FIRSTNAME);
      })
      .then((element) => {
        console.log('Set first name and fire input event');
        element.value = 'Firstname';
        element.dispatchEvent(new Event('input'));
        return waitForElement(L.FORM_LASTNAME);
      })
      .then((element) => {
        console.log('Set last name and fire input event');
        element.value = 'Lastname';
        element.dispatchEvent(new Event('input'));
        return waitForElement(L.FORM_EMAIL);
      })
      .then((element) => {
        console.log('Set email and fire input event');
        element.value = EMAIL_ADDRESS;
        element.dispatchEvent(new Event('input'));
        return waitForElement(L.FORM_PASSWORD);
      })
      .then((element) => {
        console.log('Set password and fire input event');
        element.value = PASSWORD;
        element.dispatchEvent(new Event('input'));
        return waitForElement(L.FORM_CONFIRM_PASSWORD);
      })
      .then((element) => {
        console.log('Set confirm password and fire input event');
        element.value = PASSWORD;
        element.dispatchEvent(new Event('input'));
        return waitForElement(L.FORM_NEWSLETTER);
      })
      .then((element) => {
        console.log('Click Newsletter radio');
        element.click();
        return waitForElement(L.FORM_TANDC);
      })
      .then((element) => {
        console.log('Click T and C radio');
        element.click();
        return waitForElement(L.SUBMIT_REGISTRATION_FORM);
      })
      .then((element) => {
        console.log('Click Submit button');
        element.click();
        return waitForElement(L.SIGNIN_USERNAME);
      })
      .then((element) => {
        console.log('Set Username and fire input event');
        element.value = EMAIL_ADDRESS;
        element.dispatchEvent(new Event('input'));
        return waitForElement(L.SIGNIN_PASSWORD);
      })
      .then((element) => {
        console.log('Set Password and fire input event');
        element.value = PASSWORD;
        element.dispatchEvent(new Event('input'));
        return waitForElement(L.SIGN_IN_BUTTON);
      })
      .then((element) => {
        console.log('Click Sign In button');
        element.click();
        return waitForElement(L.SELECT);
      })
      .then((element) => {
        console.log('Click Select');
        element.click();
        return waitForElement(L.SELECT);
      });
  }
})();
