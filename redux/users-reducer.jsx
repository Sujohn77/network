const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLLOW";
const UNFOLLOW = "UNFOLLLOW";
const SET_SIZE_PAGE = "SET_SIZE_PAG"
const SET_CURRENT_PAGE = "SET_PAGE_SIZE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const IS_FETCHING_TOGGLE = "IS_FETCHING_TOGGLE";
const TOGGLE_FETCHING_FOLLOW = "TOGGLE_FETCHING_FOLLOW";

import {UsersAPI} from "./../api/api";

let initialState = {
    users:[],
    pageSize: 20,
    pageCurrent: 1,
    totalCount: 15,
    isFetching:true,
    isFetchingFollow:[]
}

export const usersReducer = (state = initialState,action) => {
    switch(action.type){
        case SET_USERS: 
            return{
                ...state,
                users:action.users
            }
        case UNFOLLOW: 
            return{
                ...state,
                users:state.users.map((user) =>{
                    if(user.id == action.userId){
                        user.followed = false;
                    }
                    return user;
                })
            }  
        case FOLLOW: 
            return{
                ...state,
                users:state.users.map((user) =>{
                    if(user.id == action.userId){
                        user.followed = true;
                    }
                    return user;
                })
            }
        case SET_SIZE_PAGE: 
            return{
                ...state,
                pageSize:action.number
                }
        case SET_CURRENT_PAGE:{
            return{
                ...state,
                pageCurrent:action.number
                }
        }
        case SET_TOTAL_COUNT:{
            return{
                ...state,
                totalCount:action.number
                }
        }
        case IS_FETCHING_TOGGLE:{
            return{
                ...state,
                isFetching:action.fetch
                }
        }
        case TOGGLE_FETCHING_FOLLOW:{
            return{
                ...state,
                isFetchingFollow:action.isFetching?
                    [...state.isFetchingFollow,action.userId]
                    :state.isFetchingFollow.filter(id => id != action.userId)
                }
        }
        default: return state;
    }
}

export let setUsers = (users) =>({type: SET_USERS,users});
export let follow = (userId) =>({type: FOLLOW,userId});
export let unfollow = (userId) =>({type: UNFOLLOW,userId});
export let setCurrentPage = (number) =>({type: SET_CURRENT_PAGE,number});
export let setTotalCount = (number) =>({type: SET_TOTAL_COUNT,number});
export let toggleFetching = (fetch) =>({type: IS_FETCHING_TOGGLE,fetch});
export let toggleFollowFetching = (isFetching,userId) =>({type: TOGGLE_FETCHING_FOLLOW,userId,isFetching});
export let getUserThunk = (pageCurrent,pageSize) => (dispatch) => {
    UsersAPI.getUsers(pageCurrent,pageSize)
        .then(data => {
            dispatch(setUsers(data.items));

            dispatch(setTotalCount(data.totalCount));
            dispatch(toggleFetching(false));
        })
}
export let followThunk = (userId) => (dispatch) => {
    dispatch(toggleFollowFetching(true,userId));
    UsersAPI.follow(userId)
    .then(data => {

        if(data.resultCode == 0){
            dispatch(follow(userId));
            dispatch(toggleFollowFetching(false,userId));
        }
    })
}
export let unfollowThunk = (userId) => (dispatch) => {
    dispatch(toggleFollowFetching(true,userId));
    UsersAPI.unfollow(userId)
    .then(data => {
        if(data.resultCode == 0){
            dispatch(unfollow(userId));
            dispatch(toggleFollowFetching(false,userId));
        }
    })
}