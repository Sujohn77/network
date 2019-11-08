import React from 'react'
import User from './User/User.jsx';

const Users = (props) =>{
    return(
         props.users.map(user => <User user={user}  followThunk={props.followThunk}  unfollowThunk={props.unfollowThunk} 
            isFetchingFollow={props.isFetchingFollow} toggleFollowFetching={props.toggleFollowFetching} />)
    )
}

export default Users;