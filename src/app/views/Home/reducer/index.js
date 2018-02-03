// Dependencies
import { combineReducers } from 'redux';

// Locals Reducers
import nav from './nav';
import header from './header';
import products from './products';
import socials from './socials';
import footer from './footer';

// Combine All Reducers ↓ ↓ ↓ ↓ ↓ ↓ ↓
const initialState = combineReducers({
  header,
  nav,
  products,
  socials,
  footer
});

export default initialState;
