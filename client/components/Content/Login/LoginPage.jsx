import React from 'react'
import {reduxForm,Field} from "redux-form";
import {compose} from "redux";
import {Redirect} from "react-router-dom"

import {required} from "../../../utils/validators/required.jsx";
import {maxLengthCreator} from "../../../utils/validators/maxLengthCreator.jsx";
import {loginThunkAPI} from "../../../redux/auth-reducer.jsx";
import {connect} from 'react-redux';
import {Input} from "../../common/FormsControl.jsx"




let maxLength30 = maxLengthCreator(30);

const LoginForm = ({handleSubmit,captcha,isAuth}) =>{
debugger
    if(isAuth)
        return <Redirect to="/profile"/>;
    return <form onSubmit={handleSubmit}>
            <div>
                <Field name={"email"}
                       placeholder={"Input email"}
                       component={Input}
                       validate={[required,maxLength30]}/>
            </div>
            <div>
                <Field name={"password"}
                       placeholder={"Input password"}
                       component={Input}
                       validate={[required,maxLength30]}/>
            </div>
            <div>
                <Field name={"rememberMe"}
                       type={"checkbox"}
                       component={"input"}
                       />
                <span>remember me</span>
                {captcha && <img src={captcha}/>}
                {captcha && <Field validate={[required]} name={"captcha"} component={"input"} placeholder={"Input captcha"}/>}
            </div>
            <div>
                <button>Submit</button>
            </div>
            </form>
};

const LoginReduxForm =  reduxForm({
    form: 'login'
})(LoginForm);

const LoginContainer = (props) =>{
    let login = (values) =>{
       props.loginThunkAPI(values.email,values.password,values.rememberMe,values.captcha);
    };

    return(
        
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={login} {...props}/>
        </>
    )
};

let mapStateToProps = (state) => {
    return{
        isAuth:state.auth.isAuth,
        captcha:state.auth.captcha
    }
};
export const LoginPage =  compose(
    connect(mapStateToProps,{loginThunkAPI}))
(LoginContainer);



