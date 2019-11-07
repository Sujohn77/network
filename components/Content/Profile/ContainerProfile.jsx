
import React, { useState , useEffect} from 'react';
import {connect} from 'react-redux';
import './../../../assets/css/Profile.module.css';
import { updateMessage, sendMessage, setProfileThunk,updateStatus,getStatus} from '../../../redux/profile-reducer.jsx';
import Profile from './Profile.jsx';
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Preloader from "../../common/Preloader.jsx";
import {setStatus} from "../../../redux/profile-reducer.jsx";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


const ContainerProfile = (props) =>{

    // INITIAL LOCAL STATE FOR RENDER
    const  [userId,setUserId] = useState(1495);

    //ADD POST ON PROFILE
    let addPost = (values) =>{
        props.sendMessage(values.newPostText);
    };
    //UPDATE DATA IF CHANGE PROPS URL
    useEffect(() => {

        if(props.match.params.userId){
            setUserId(props.match.params.userId) ;
        }
        props.setProfileThunk(userId);
        props.getStatus(userId);
    },[userId]);

    // WAIT FOR SERVER RESPONSE
    if(!props.profile) return <Preloader/>

        return <Profile {...props.profile} addPost={addPost} setStatus={props.setStatus}/>
};

let mapStateToProps = (state) =>{
    return {
        profilePage:state.profilePage,
        profile:state.profilePage.profile
    }
};

export default compose(
    connect(mapStateToProps,{updateMessage,sendMessage,setProfileThunk,getStatus,setStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ContainerProfile);
