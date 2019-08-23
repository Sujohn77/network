import React from 'react';

let StoreContext = React.createContext();

let Provider = (props) => {
    return(
    <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
    ) 
}
export default Provider;