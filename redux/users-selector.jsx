
import {createSelector}  from "reselect";

export const getUsersSelector = (state) => {
    return state.usersPage.users
}


export const getUsers = createSelector(getUsersSelector,(users)=>{
    return users.filter(u => true);
})
