import { dialogReducer } from "./dialogs-reducer.jsx";
import { profileReducer } from "./profile-reducer.jsx";
import { usersReducer } from "./users-reducer.jsx";
import { authReducer } from "./auth-reducer.jsx";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {reducer as formReducer} from 'redux-form';

import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-reducer.jsx";

let reducers = combineReducers({
    dialogsPage:dialogReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;