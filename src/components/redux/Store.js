import { createStore } from "redux";
import RootReducer from "./RootReducer";

const initialStore = {
  CartReducer: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) ?? [],
  },
};

export const Store = createStore(RootReducer, initialStore);
