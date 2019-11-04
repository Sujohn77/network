import React from 'react'
import Users from './Users.jsx';
import {connect} from 'react-redux';
import {setCurrentPage,getUserThunk,unfollowThunk,followThunk} from '../../../redux/users-reducer.jsx';
import "./../../../assets/css/ContainerUsers.css";
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import Preloader from "../../common/Preloader.jsx";
import {getUsers} from "../../../redux/users-selector.jsx";
import {Paginator} from "../../common/Paginator.jsx";

export class ContainerUsers extends React.Component{
    componentDidMount(){
        this.props.getUserThunk(this.props.pageCurrent,this.props.pageSize);
    }
    OnPageChanged(pageNumber){
        this.props.setCurrentPage(pageNumber)
        this.props.getUserThunk(pageNumber,this.props.pageSize);
    }
    render(){
        return(
            <div className="users__content">
                <Paginator OnPageChanged={this.OnPageChanged.bind(this)} totalCount={this.props.totalCount} pageSize={this.props.pageSize} pageCurrent={this.props.pageCurrent}/>
                {
                    (this.props.isFetching && <Preloader/>)
                }
                <Users users={this.props.users}  followThunk={this.props.followThunk}  unfollowThunk={this.props.unfollowThunk}
                       isFetchingFollow={this.props.isFetchingFollow}  />
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        users:getUsers(state),
        pageCurrent:state.usersPage.pageCurrent,
        totalCount:state.usersPage.totalCount,
        pageSize:state.usersPage.pageSize,
        isFetchingFollow:state.usersPage.isFetchingFollow
    }
}

let ContainerUsersWithRedirect = withAuthRedirect(ContainerUsers);

export default connect(mapStateToProps,{setCurrentPage,getUserThunk,followThunk,unfollowThunk})(ContainerUsersWithRedirect);
