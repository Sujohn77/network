import { dialogReducer } from "../components/Content/Dialogs/dialogs-reducer.jsx";
import { profileReducer } from "../components/Content/Profile/profile-reducer.jsx";
import {createStore, combineReducers} from "redux";

let reducers = combineReducers({
    dialogsPage:dialogReducer,
    profilePage:profileReducer
});

let store = createStore(reducers);

export default store;