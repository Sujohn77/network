import React from "react"
import ReactDOM from "react-dom"
import App from "./App";
import store from './redux/store.js'
import {BrowserRouter } from 'react-router-dom'
import {Provider} from "react-redux";
function rerenderEntireTree(state){
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App profilePage={state.profilePage}/>
            </Provider> 
        </BrowserRouter>,
        document.getElementById('container'));
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
}); 