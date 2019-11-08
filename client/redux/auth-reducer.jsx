const SET_LOGIN_USER = "SET_LOGIN_USER";
const SET_CAPTCHA = "SET_CAPTCHA";

import {AuthAPI, securityApi} from "../api/api";

let initialState = {
    payload: {
        email: null,
        id: null,
        login: null,
        isAuth: false
    },
    captcha:null
};

export const authReducer = (state = initialState,action ) => {
    switch(action.type){
        case SET_LOGIN_USER:
                return {
                    ...state,
                    payload: action.payload,
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


    if(data.data.resultCode == 0){

        let {email,id,login} = data.data.data;

        dispatch(setLoginUser(id, email, login, true));
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
export const logoutThunkAPI = () => (dispatch) => {
    AuthAPI.logout().then(data =>{
        if(data.resultCode == 0){
            dispatch(setLoginUser(null, null, null, false));
        }
    })
};
export let setLoginUser = (email,id,login,isAuth) =>({type: SET_LOGIN_USER,payload:{email,id,login,isAuth}});
let setCaptcha = (captcha) =>({type: SET_CAPTCHA,captcha});