import React from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"
import {authThunkAPI} from "../redux/auth-reducer.jsx";


let mapStateToProps = (state) => {
    return {
        payload: state.auth.payload
    }
};
export const withAuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component{
        render(){
            debugger
            // NOT LOGGED TO LOGIN ELSE TO COMPONENT
             if(!this.props.payload.isAuth) return <Redirect to="/login"/>
            return <Component {...this.props}/>
        }
    }


    let ConnectRedirectComponent =  connect(mapStateToProps,{authThunkAPI})(RedirectComponent);

    return ConnectRedirectComponent;

};

