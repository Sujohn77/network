import React from 'react'
import {connect} from 'react-redux';
import {setLoginUser} from "../../redux/auth-reducer.jsx"
import Header from './Header.jsx';
import {logoutThunkAPI,authThunkAPI} from "../../redux/auth-reducer.jsx";

export class HeaderContainer extends React.Component {
    render(){
        return(
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) =>{

    return{
        isAuth:state.auth.isAuth,
        login:state.auth.authInfo.login
    }
};

export default connect(mapStateToProps,{authThunkAPI,logoutThunkAPI})(HeaderContainer);