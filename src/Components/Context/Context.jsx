import React, { createContext, useReducer } from 'react';

export const ActiveContext = createContext();
const activator = (state, action) => {
    switch(action.type){
        case 'Home': return 'Home'
        case 'Buy': return 'Buy'
        case 'Sell': return 'Sell'
        case 'Rent': return 'Rent'
        case 'Profile': return 'Profile'
        case 'Registration': return 'Registration'
    }
}
export const Active = ({ children }) => {
  const [active, dispatch] = useReducer(activator , 'Home');
  return (
    <ActiveContext.Provider value={[active, dispatch]}>
      {children}
    </ActiveContext.Provider>
  );
};
