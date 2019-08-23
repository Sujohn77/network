import React from 'react'
import './Profile.module.css';
import MyPost from './MyPost/MyPost.jsx';
import { updateMessageCreator, sendMessageCreator } from './profile-reducer.jsx';
 const Profile = (props) =>{

                let posts = props.profilePage.posts.map(m => <MyPost post={m.message}/>);
                let newPostText = React.createRef();
                let onClick = () =>{
                    props.dispatch(sendMessageCreator(newPostText.current.value));
                }
                let onChange = () =>{
                    props.dispatch(updateMessageCreator(newPostText.current.value));
                }
                return(
                    <div>
                    <div className="profileInfo">
                        <img src="media\avatar.jpg" width="250" height="150" alt=""/>
                            <div>
                                    <p>Ivan</p>
                                    Subcribers <b>727</b> 
                            </div>     
                    </div>
                    <div className="posts">
                        {posts}  
                        <input ref={newPostText} type="text" value={props.profilePage.newPostMessage} placeholder="Enter your post" onChange={onChange} />
                        <input type="submit" onClick={onClick}/>
                    </div>
                </div>
                )

}
export default Profile;