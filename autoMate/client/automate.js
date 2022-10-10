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
    DELIVERY_MODE_CONTINUE_BUTTON: '.cx-checkout-btns button[type=submit]',
    CREATE_ACOUNT_REGISTER_BUTTON: '.AccountPageTemplate button[type=submit]',
    LOGIN_USERNAME: 'input[type=email]',
    LOGIN_PASSWORD: 'input[type=password]',
    LOGIN_SIGNIN_BUTTON: 'button[type=submit]',
    ALLOW_COOKIES_BUTTON: '.anonymous-consent-banner button.btn-primary',
	SIGN_IN_LINK: 'cx-login a',
	MY_ACCOUNT: 'button[aria-label=My Account]'
  };

  const EMAIL_ADDRESS = `${new Date().getTime()}@test.com`;
  const PASSWORD = 'Password+1234';

  function waitForElement(selector) {
    console.log('	Get element from selector:', selector);
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
        deleteAllCookies();
        localStorage.clear();
        console.log('Click on Home Icon');
        element.click();
        return waitForElement(L.ALLOW_COOKIES_BUTTON);
      })
      .then((element) => {
        console.log('Click on Allow Cookies Button');
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
        console.log('Click on Proceed To Checkout button', element);
        element.click();
        return waitForElement(L.REGISTER_BUTTON);
      })
      .then((element) => {
        console.log('Click on Register button', element);
        element.click();
        return waitForElement(L.ADDRESS_FORM_TITLE);
      })
      .then((element) => {
        console.log('Click Title ng select', element);
        element.dispatchEvent(new Event('mousedown'));
        return waitForElement(L.ADDRESS_FORM_TITLE_OPTION);
      })
      .then((element) => {
        console.log('Click an Option on Title ng select', element);
        element.click();
        return waitForElement(L.FORM_FIRSTNAME);
      })
      .then((element) => {
        console.log('Set first name and fire input event');
        element.value = 'John';
        element.dispatchEvent(new Event('input'));
        return waitForElement(L.FORM_LASTNAME);
      })
      .then((element) => {
        console.log('Set last name and fire input event');
        element.value = 'Smith';
        element.dispatchEvent(new Event('input'));
        return waitForElement(L.FORM_EMAIL);
      })
      .then((element) => {
        console.log('Set Email and fire input event');
        element.value = EMAIL_ADDRESS;
        element.dispatchEvent(new Event('input'));
        return waitForElement(L.FORM_PASSWORD);
      })
      .then((element) => {
        console.log('Set Password and fire input event');
        element.value = PASSWORD;
        element.dispatchEvent(new Event('input'));
        return waitForElement(L.FORM_CONFIRM_PASSWORD);
      })
      .then((element) => {
        console.log('Set Confirm Password and fire input event');
        element.value = PASSWORD;
        element.dispatchEvent(new Event('input'));
        return waitForElement(L.FORM_TANDC);
      })
      .then((element) => {
        console.log('Click T and C');
        element.click();
        return waitForElement(L.FORM_NEWSLETTER);
      })
      .then((element) => {
        console.log('Click Newsletter');
        element.click();
        return waitForElement(L.CREATE_ACOUNT_REGISTER_BUTTON);
      })
      .then((element) => {
        console.log('Click Register Button');
        element.click();
        return waitForElement(L.LOGIN_USERNAME);
      })
      .then((element) => {
        console.log('Enter username');
        element.value = EMAIL_ADDRESS;
        element.dispatchEvent(new Event('input'));
        return waitForElement(L.LOGIN_PASSWORD);
      })
      .then((element) => {
        console.log('Enter password');
        element.value = PASSWORD;
        element.dispatchEvent(new Event('input'));
        return waitForElement(L.LOGIN_SIGNIN_BUTTON);
      })
      .then((element) => {
        console.log('Click Sign In Button');
        element.click();
        return waitForElement(L.ADDRESS_FORM_COUNTRY);
      })
      .then((element) => {
        console.log('Click Country ng select', element);
        element.dispatchEvent(new Event('mousedown'));
        return waitForElement(L.ADDRESS_FORM_COUNTRY_OPTION);
      })
      .then((element) => {
        console.log('Click an Option on Country ng select', element);
        element.click();
        return waitForElement(L.ADDRESS_FORM_TITLE);
      })
      .then((element) => {
        console.log('Click Title ng select', element);
        element.dispatchEvent(new Event('mousedown'));
        return waitForElement(L.ADDRESS_FORM_TITLE_OPTION);
      })
      .then((element) => {
        console.log('Click an Option on Title ng select', element);
        element.click();
        // return waitForElement(L.FORM_FIRSTNAME);
      });
    //   .then((element) => {
    //     console.log('Set Address Line 1 and fire input event');
    //     element.value = '1';
    //     element.dispatchEvent(new Event('input'));
    //     return waitForElement(L.ADDRESS_FORM_LINE_2);
    //   })
    //   .then((element) => {
    //     console.log('Set Address Line 2 and fire input event');
    //     element.value = 'High Street';
    //     element.dispatchEvent(new Event('input'));
    //     return waitForElement(L.ADDRESS_FORM_TOWN);
    //   })
    //   .then((element) => {
    //     console.log('Set Address Town and fire input event');
    //     element.value = 'Townsville';
    //     element.dispatchEvent(new Event('input'));
    //     return waitForElement(L.ADDRESS_FORM_POSTAL_CODE);
    //   })
    //   .then((element) => {
    //     console.log('Set Address Postcode and fire input event');
    //     element.value = '123456';
    //     element.dispatchEvent(new Event('input'));
    //     return waitForElement(L.ADDRESS_FORM_PHONE);
    //   })
    //   .then((element) => {
    //     console.log('Set Address Phone and fire input event');
    //     element.value = '555-123-4321';
    //     element.dispatchEvent(new Event('input'));
    //     return waitForElement(L.ADDRESS_CONTINUE_BUTTON);
    //   })
    //   .then((element) => {
    //     console.log('Click on Address Continue button');
    //     element.click();
    //     return waitForElement(L.DELIVERY_MODE_CONTINUE_BUTTON);
    //   })
    //   .then((element) => {
    //     console.log('Click on Delivery Mode Continue button');
    //     element.click();
    //     // return waitForElement(L.DELIVER_MODE_CONTINUE_BUTTON);
    //   });

    //   .then((element) => {
    //     console.log('Set email and fire input event');
    //     element.value = EMAIL_ADDRESS;
    //     element.dispatchEvent(new Event('input'));
    //     return waitForElement(L.FORM_PASSWORD);
    //   })
    //   .then((element) => {
    //     console.log('Set password and fire input event');
    //     element.value = PASSWORD;
    //     element.dispatchEvent(new Event('input'));
    //     return waitForElement(L.FORM_CONFIRM_PASSWORD);
    //   })
    //   .then((element) => {
    //     console.log('Set confirm password and fire input event');
    //     element.value = PASSWORD;
    //     element.dispatchEvent(new Event('input'));
    //     return waitForElement(L.FORM_NEWSLETTER);
    //   })
    //   .then((element) => {
    //     console.log('Click Newsletter radio');
    //     element.click();
    //     return waitForElement(L.FORM_TANDC);
    //   })
    //   .then((element) => {
    //     console.log('Click T and C radio');
    //     element.click();
    //     return waitForElement(L.SUBMIT_REGISTRATION_FORM);
    //   })
    //   .then((element) => {
    //     console.log('Click Submit button');
    //     element.click();
    //     return waitForElement(L.SIGNIN_USERNAME);
    //   })
    //   .then((element) => {
    //     console.log('Set Username and fire input event');
    //     element.value = EMAIL_ADDRESS;
    //     element.dispatchEvent(new Event('input'));
    //     return waitForElement(L.SIGNIN_PASSWORD);
    //   })
    //   .then((element) => {
    //     console.log('Set Password and fire input event');
    //     element.value = PASSWORD;
    //     element.dispatchEvent(new Event('input'));
    //     return waitForElement(L.SIGN_IN_BUTTON);
    //   })
    //   .then((element) => {
    //     console.log('Click Sign In button');
    //     element.click();
    //     return waitForElement(L.SELECT);
    //   })
    //   .then((element) => {
    //     console.log('Click Select');
    //     element.click();
    //     return waitForElement(L.SELECT);
    //   });
  }
})();
