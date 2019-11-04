import React from 'react'
import "./../../../../assets/css/User.css";
import userPhoto from "./../../../../assets/imgs/defaultPhoto.png";
import {NavLink} from "react-router-dom";
const User = (props) =>{
    return(
        <div className="user" key={props.user.id}>
            <div>
                <NavLink to={'/profile/'+props.user.id}> 
                    <img src={(props.user.photos.small != null)?props.user.photos.small:userPhoto} width="90" alt=""/>
                </NavLink>
            </div>
            <div>
                <span>{props.user.name}</span>
                {(props.user.followed)? 

                <button disabled={props.isFetchingFollow.some(id => id == props.user.id)} 
                onClick={() =>{props.unfollowThunk(props.user.id);
                }}>Follow</button>

                :<button disabled={props.isFetchingFollow.some(id => id == props.user.id)}
                 onClick={() => {
                        props.followThunk(props.user.id);
                }}>Unfollow</button>}
            </div>
        </div>
    )
}

export default User;