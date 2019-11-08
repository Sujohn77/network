const SET_LOGIN_USER = "SET_LOGIN_USER";
const SET_CAPTCHA = "SET_CAPTCHA";
const SET_LOGOUT = "SET_LOGOUT";

import {AuthAPI, securityApi} from "../api/api";

let initialState = {
    authInfo: {
        email: null,
        id: null,
        login: null,

    },
    login:{
        login:null,
        password:null
    },
    isAuth: false,
    captcha:null
};

export const authReducer = (state = initialState,action ) => {
    switch(action.type){
        case SET_LOGIN_USER:
                return {
                    ...state,
                    authInfo: action.payload,
                    isAuth: true
                };
        case SET_LOGOUT:
            return {
                ...state,
                authInfo: action.payload,
                isAuth: false
            };
        case SET_CAPTCHA:
            return{
                ...state,
                captcha:action.captcha
            };
        default: return state;
    }
    
};

export const authThunkAPI = () => async (dispatch) => {

    let data = await AuthAPI.isAuth();


    if(data.resultCode == 0){

        let {email,id,login} = data.data;

        dispatch(setLoginUser(id, email, login));
    }

};
export const loginThunkAPI = (email,password,rememberMe = false,captcha=null) =>  (dispatch) => {
    AuthAPI.login(email,password,rememberMe,captcha).then(data => {
        if(data.resultCode == 0){
            dispatch(setLoginUser()); 
        }else if(data.resultCode == 10){
            securityApi.getCaptcha().then(responce => {
                dispatch(setCaptcha(responce.data));
            })
        }else{
            let message = data.resultCode > 0 ? data.messages[0]:"Some error";
            stopSubmit("login",{_error:message});
        }
    });
};
export const logoutThunkAPI = () => async (dispatch) => {
    let data = await AuthAPI.logout();

    if(data.resultCode == 0){
        dispatch(setLogout(null, null, null));
    }
};

export let setLoginUser = (email,id,login) =>({type: SET_LOGIN_USER,payload:{email,id,login}});
export let setLogout = (email,id,login) =>({type: SET_LOGOUT,payload:{email,id,login}});
let setCaptcha = (captcha) =>({type: SET_CAPTCHA,captcha});