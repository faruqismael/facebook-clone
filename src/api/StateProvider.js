import { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();

export const stateProvider = ({ reducer, initialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};

export const useStateValue = () => useContext(StateContext);
