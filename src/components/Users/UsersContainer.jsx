/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";
import { followSuccess, unFollowSuccess,  setCurrentPage,  toggleFollowingProgress, getUsersThunkCreator, follow, unFollow } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../commom/Preloader/Preloader.jsx';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    

    render() {
        let authRedirectComponent = withAuthRedirect(UsersContainer)
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unFollowSuccess={this.props.unFollowSuccess}
                followSuccess={this.props.followSuccess}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                isAuth={this.props.isAuth}
                currentPage={this.props.currentPage} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}
let authRedirectComponent = withAuthRedirect(UsersContainer)
export default connect(mapStateToProps, {
    followSuccess,
    unFollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: getUsersThunkCreator,
    follow,
    unFollow
})(authRedirectComponent);
