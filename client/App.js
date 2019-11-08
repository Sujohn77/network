// LIBRARIES
import React, {Component} from 'react'
import { Route } from 'react-router-dom';
import './../assets/css/App.module.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import {Sidebar} from './components/Sidebar/Sidebar.jsx';
import ContainerProfile from "./components/Content/Profile/ContainerProfile.jsx";
import ContainerDialogs from "./components/Content/Dialogs/ContainerDialogs.jsx";
import ContainerUsers from "./components/Content/Users/ContainerUsers.jsx";
import {LoginPage} from "./components/Content/Login/LoginPage.jsx";
import {connect} from "react-redux";
import {authThunkAPI} from "./redux/auth-reducer.jsx";
import Preloader from "./components/common/Preloader.jsx";
import {setInitialize} from "./redux/app-reducer.jsx";

// COMPONENT
class App extends Component {
    componentDidMount(){

        this.props.authThunkAPI();

        this.props.setInitialize();
    }
    render() {
        if(!this.props.initialized)
            return <Preloader/>
        
        return (
            <div className="wrapper">
                <HeaderContainer/>
                 <Sidebar/>
                <div className="content">
                    <Route exact path="/" render={() => <ContainerProfile/>}/>
                    <Route path="/profile/:userId?" render={() => <ContainerProfile/>}/>
                    <Route path='/dialogs' render={() => <ContainerDialogs/>}/>
                    <Route path='/users' render={() => <ContainerUsers/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>)
    }
}
let mapStateToProps = (state) =>{
    return{
        initialized:state.app.initialized
    }
}
export default App =  connect(mapStateToProps,{setInitialize,authThunkAPI})(App)
