import React from 'react'
import {connect} from 'react-redux';
import {setLoginUser,authThunkAPI} from "./../../redux/auth-reducer.jsx"
import Header from './Header.jsx';
import {logoutThunkAPI} from "../../redux/auth-reducer.jsx";

export class HeaderContainer extends React.Component {
    render(){
        return(
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        isAuth:state.auth.payload.isAuth,
        login:state.auth.payload.login
    }
}

export default connect(mapStateToProps,{setLoginUser,authThunkAPI,logoutThunkAPI})(HeaderContainer);