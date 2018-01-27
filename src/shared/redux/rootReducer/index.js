// Dependencies
import { combineReducers } from "redux";

// Devices Reducers
import devices from "./deviceReducer";
// Views Reducers
import home from "../../../app/views/Home/reducer";

const rootReducer = () =>
  combineReducers({
    devices,
    home,
    realtime: true
  });

export default rootReducer;
