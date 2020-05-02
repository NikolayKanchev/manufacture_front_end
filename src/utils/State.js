import React, { useReducer, useContext } from 'react';

export const initialState = {
    logedIn: false,
    username: "gggggggggg"
}
  
export const reducer = (state, action) => {
    switch (action.type) {
        case "updateUser": 
            state.logedIn = action.logedIn;           
            state.username = action.username;
            return {...state};
        default:
        return initialState;
    }
}
  
export const AppContext = React.createContext([initialState, action => {}]);
  
export const StateProvider = ({ reducer, initialState, children }) =>{
    const contextValue = useReducer(reducer, initialState);
  
    return (
      <AppContext.Provider value={contextValue}>
        {children}
      </AppContext.Provider>
    );
};
  
export const useReduxState = () => {
    const contextValue = useContext(AppContext);
    return contextValue;
};