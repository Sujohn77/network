import React from 'react'
import logo from "./../../assets/imgs/logo.png";
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header>
                <a href="/">
                    <img src={logo} width="60" alt=""/>
                </a>
                {
                    (props.isAuth)?<div><span>{props.login}</span><button onClick={props.logoutThunkAPI}>logout</button></div> : <NavLink to="/login">login</NavLink>
                }
        </header>
    )
}
export default Header;