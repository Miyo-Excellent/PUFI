// Dependencies
import { combineReducers } from 'redux';

// Locals Reducers

// Initial States
const homeInitialState = (options = {}) => ({
  ...options,
  home: {}
});

// Reducers
function home (state = homeInitialState({}), action) {
  switch (action.type) {
    case "CHANGE": {
      return state;
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
  home
});

export default initialState;
