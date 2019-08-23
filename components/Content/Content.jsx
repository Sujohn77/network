import React from 'react';
import { Route } from 'react-router-dom'
import Profile  from './Profile/Profile.jsx';
import ContainerDialogs from './Dialogs/ContainerDialogs.jsx';
const Content = (props) => {

    return(
        <div className="content">
            <Route exact path="/" render={() => <Profile profilePage={props.profilePage}/>}/>
            <Route path='/dialogs' render={() => <ContainerDialogs />}/>
        </div>
    )
}
export default  Content;