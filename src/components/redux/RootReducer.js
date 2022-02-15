import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";

const RootReducer = combineReducers({
  CartReducer: CartReducer,
});

export default RootReducer;
