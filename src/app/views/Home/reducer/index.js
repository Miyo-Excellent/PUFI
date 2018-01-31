// Dependencies
import { combineReducers } from 'redux';
// Locals Reducers

// Initial States
const navInitialState = (options = {}) => ({
  ...options,
  login: {
    btn: {
      active: false
    },
    fields: {
      email: '',
      password: ''
    }
  }
});

const headerInitialState = (options = {}) => {
  return {
    carousel: {
      pictures: {
        all: [
          'http://hdwallpaperfx.com/wp-content/uploads/2016/12/Creative-Universe-Planet-Wallpaper.jpg',
          'http://ognature.com/wp-content/uploads/2017/05/rainbow-sky-dark-beautiful-field-tree-light-blossomed-witness-magic-hills-clouds-wallpapers-for-desktop-1366x768.jpg',
          'http://proyectofreak.com/pw/wp-content/uploads/2016/03/Dark-Souls-III-Wallpaper-Pictures.jpg',
          'https://i.pinimg.com/originals/40/dc/1f/40dc1f297796f9d114dcb83fbe5ddf4d.jpg'
        ],
        current: 'http://hdwallpaperfx.com/wp-content/uploads/2016/12/Creative-Universe-Planet-Wallpaper.jpg'
      }
    }
  };
};

// Reducers
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
    default: {
      return state;
      break;
    }
  }
}

function header (state = headerInitialState({}), action) {
  switch (action.type) {
    case "NEXT_PICTURE": {
      const {
        all,
        current
      } = action.pictures;

      const controller = () => {
        if (
          all.indexOf(current) + 1 < all.length
          && all.indexOf(current) !== all.indexOf(current + 1)
          && all.indexOf(current) !== all.indexOf(current - 1)
        ) {
          return all[all.indexOf(current) + 1];
        } else {
          return all[0];
        }
      };

      return {
        ...state,
        carousel: {
          ...state.carousel,
          pictures: {
            all: state.carousel.pictures.all,
            current: controller()
          }
        }
      };
      break;
    }
    case "SET_PICTURE": {
      return {
        ...state,
        carousel: {
          ...state.carousel,
          pictures: {
            all: state.carousel.pictures.all,
            current: state.carousel.pictures.all[action.index]
          }
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

// Combine All Reducers ↓ ↓ ↓ ↓ ↓ ↓ ↓
const initialState = combineReducers({
  header,
  nav
});

export default initialState;
