import React, { useReducer, useContext } from 'react';

export const initialState = {
    userType: "",
    logedIn: false,
    username: "",
    token: "",
    isManufacturer: false,
    company: undefined,
    user: undefined,
    categorySelected: false,
    manufacturerPlan: "",
    endUserPlan: "",
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "updateUser":
            state.userType = action.userType;
            state.logedIn = action.logedIn;          
            state.username = action.username;
            state.token = action.token;
            state.isManufacturer = action.isManufacturer;
            state.company = action.company;
            state.user = action.user;
            return {...state};
        case "logoutUser":
            state = action;                     
            return {...state};
        case "updateSelectedCategory":
            state.logedIn = action.logedIn;           
            state.username = action.username;
            state.token = action.token;
            state.id = action.id;
            state.categorySelected = action.categorySelected;
            return {...state};
        case "selectManufacturerPlan":   
            state = action;                     
            return {...state};
        case "selectEndUserPlan":   
            state = action;                     
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