const UPDATE_POST = "UPDATE_POST";
const SEND_POST = "SEND_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS_USER ="SET_STATUS_USER"

import {ProfileAPI, UsersAPI} from "../api/api";

let initialState = {
    profile:{
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName:null,
        contacts: {
            github: null,
            vk: null,
            facebook:null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        status:"---",
        newPostMessage:"",
        photos:{
            small:null,
            large:null
        }
    }
}

export const profileReducer = (state = initialState,action ) => {
    switch(action.type){
        case UPDATE_POST:
                return {
                    ...state,
                    newPostMessage: action.newPostMessage
                }
        case SEND_POST:
            let body = state.newPostMessage;
            if(action.newPostMessage != ''){
                return{
                    ...state,
                    posts:[...state.posts,{id:6,message:body}]
                }
            } 
        case SET_USER_PROFILE:
            return{
                ...state,
                profile:action.profile
            }
        case SET_STATUS_USER:
            return{
                ...state,
                status:action.status
            }
        default: return state;
    }
    
}

export let updateMessage = (newPostMessage) =>({type: UPDATE_POST,newPostMessage});
export let sendMessage = (newPostMessage) =>({type: SEND_POST,newPostMessage});
export let setProfileInfo = (profile) => ({type: SET_USER_PROFILE,profile});
export let setStatus = (status) =>({type:SET_STATUS_USER,status})
export let setProfileThunk = (userId) => (dispatch) =>{
    UsersAPI.setProfile(userId).then(data => {

        dispatch(setProfileInfo(data));
    });
}
export let getStatus = (userId) => (dispatch) =>{
    ProfileAPI.getStatus(userId).then(data => {
        if(!data){
            data= "---";
        }
        dispatch(setStatus(data));
    });
}
export let updateStatus = (status) => (dispatch) =>{
    ProfileAPI.updateStatus(status).then(data => {
            dispatch(setStatus(status));
    });
}