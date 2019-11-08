// @flow
import React from 'react'
import '../../../../assets/css/Profile.module.css';
import MyPost from './MyPost/MyPost.jsx';
import userDefaultPhoto from './../../../../assets/imgs/avatar.jpg';
import {ProfileStatus} from "./ProfileStatus/ProfileStatus.jsx";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/required.jsx";
import {maxLengthCreator} from "../../../utils/validators/maxLengthCreator.jsx";
import {Textarea} from "./../../common/FormsControl.jsx"
import "./Profile.css";

type profileProps = {
    lookingForAJob:string,
    photos:{
        small:string,
        large:string
    },
    lookingForAJobDescription:string,
    fullName:string,
    contacts:{
        github:string,
        vk:string,
        facebook:string,
        twitter:string,
        website:string,
        youtube:string,
        mainLink:string,
        instagram:string
    },
    status:string,
    addPost:()=>void,
    updateStatus:()=>void,
    setStatus:()=>void
}

 const Profile = (props:profileProps) =>{
                return(
                    <div>
                        <div className="profileInfo">
                            {
                                (props.photos.small || props.photos.large)?
                                    <img src={props.photos.small || props.photos.large} className="profile__img"  alt=""/>:
                                    <img src={userDefaultPhoto} className="profile__img" width="200" height="100" />
                            }
                            <div>
                                <h4>{props.fullName}</h4>
                            </div>
                        </div>
                        <div className="info__block">
                            <div>lookingForAJob: <input type="checkbox" checked={props.lookingForAJob}/></div>
                            <div>lookingForAJobDescription:   <span>{props.lookingForAJobDescription}</span></div>
                            <div>fullName:  <span>{props.fullName}</span> </div>
                            <div>Contacts</div>
                            <ul>
                                {props.contacts.github && <li>github:   <span>{props.contacts.github}</span></li>}
                                {props.contacts.vk && <li>vk:   <span>{props.contacts.vk}</span></li>}
                                {props.contacts.facebook && <li>facebook:   <span>{props.contacts.facebook}</span></li>}
                                {props.contacts.instagram && <li>instagram:   <span>{props.contacts.instagram}</span></li>}
                                {props.contacts.twitter && <li>twitter:   <span>{props.contacts.twitter}</span></li>}
                                {props.contacts.website&&<li>website:   <span>{props.contacts.website}</span></li>}
                                {props.contacts.youtube&&<li>youtube:   <span>{props.contacts.youtube}</span></li>}
                                {props.contacts.mainLink&&<li>mainLink:   <span>{props.contacts.mainLink}</span></li>}
                            </ul>
                        </div>
                        <div className="posts">
                            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                            <AddPostFormRedux onSubmit={props.addPost}/>
                        </div>
                    </div>
                )

}
let maxLength30 = maxLengthCreator(30);

type postFormProps = {
    handleSubmit:()=>void
}

let addPostForm =(props:postFormProps) =>{
     return(
         <form onSubmit={props.handleSubmit}>
             <div>
                 <Field name={"newPostText"} placeholder="Enter your post" component={Textarea} validate={[required,maxLength30]}/>
                 <button>Send</button>
             </div>
         </form>
     )
}

let AddPostFormRedux = reduxForm({form:"addPostText"})(addPostForm);

export default Profile;