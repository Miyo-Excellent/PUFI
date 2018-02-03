const navInitialState = (options = {}) => ({
  ...options,
  mobile: {
    active: false
  },
  login: {
    btn: {
      active: false
    },
    fields: {
      email: '',
      password: ''
    }
  },
  menu : {
    logo: {
      picture: {
        url: 'http://localhost:3000/logo/puffi_black.jpg',
        alt: "LOGO"
      }
    },
    links: [
      {
        name: "PUFI PUFF",
        picture: {
          url: 'http://localhost:3000/icons/pufi_puff_icon.png',
          alt: "PUFI PUFF"
        },
        path: "/products/pufi-puff"
      },
      {
        name: "PUFI RAIN",
        picture: {
          url: 'http://localhost:3000/icons/pufi_rain_icon.png',
          alt: "PUFI RAIN"
        },
        path: "/products/pufi-rain"
      },
      {
        name: "PUFI CART",
        picture: {
          url: 'http://localhost:3000/icons/pufi_cart_icon.png',
          alt: "PUFI CART"
        },
        path: "/products/pufi-cart"
      },
      {
        name: "PUFI NAP",
        picture: {
          url: 'http://localhost:3000/icons/pufi_nap_icon.png',
          alt: "PUFI NAP"
        },
        path: "/products/pufi-nap"
      }
    ]
  }
});

function nav (state = navInitialState({}), action) {
  switch (action.type) {
    case "CHANGE_NAV_LOGIN_BTN_STATUS": {
      return {
        ...state,
        login: {
          ...state.login,
          btn: {
            ...state.login.btn,
            active: !state.login.btn.active
          }
        }
      };
      break;
    }
    case "CHANGE_PASSWORD_INPUT_VALUE_STATE": {
      return {
        ...state,
        fields: {
          ...state.fields,
          password: action.data
        }
      };
      break;
    }
    case "CHANGE_EMAIL_INPUT_VALUE_STATE": {
      return {
        ...state,
        fields: {
          ...state.fields,
          email: action.data
        }
      };
      break;
    }
    case "CLEAR_NAV_LOGIN_FIELDS": {
      return {
        ...state,
        fields: {
          ...state.fields,
          email: '',
          password: ''
        }
      };
      break;
    }
    case "ACTIVE_NAV_MOBILE_MENU": {
      return {
        ...state,
        mobile: {
          ...state.mobie,
          active: !state.mobile.active
        }
      };
      break;
    }
    default: {
      return state;
      break;
    }
  }
}

export default nav;
