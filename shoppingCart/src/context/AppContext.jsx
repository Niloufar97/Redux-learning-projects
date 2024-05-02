/* eslint-disable no-fallthrough */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
export const AppContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, price } = action.data;
      const newState = { ...state };
      if (newState.addedProducts.some((product) => product.id == id)) {
        newState.addedProducts.map((product) => {
          if (product.id == id) {
            product.count += 1;
            product.totalPrice = product.count * product.price;
          }
        });
      } else {
        newState.addedProducts.push({
          ...action.data,
          count: 1,
          totalPrice: price,
        });
        newState.addedToCart += 1;
      }

      return newState;
    }
    case "INCREASE_IN_CART": {
      // CODE
    }
    case "DECREASE_IN_CART": {
      //
    }
    case "REMOVE_FROM_CART": {
      //
    }
  }
};

function AppProvider({ children }) {
  const initialState = { addedToCart: 0, addedProducts: [] };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
