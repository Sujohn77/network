// LIBRARIES
import React from 'react'
import Header from './components/Header/Header.jsx';
import Sidebar from './components/SideBar/SideBar.jsx';
import Content from './components/Content/Content.jsx';
import './App.module.css';

// COMPONENT
 const App = (props) => {
    return(
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <Content profilePage={props.profilePage}/>
        </div>)
}
export default App;