import React from "react";
import { connect } from "react-redux";
import { followSuccess, unFollowSuccess,  setCurrentPage,  toggleFollowingProgress, getUsersThunkCreator } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../commom/Preloader/Preloader.jsx'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render() {

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
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    followSuccess,
    unFollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: getUsersThunkCreator
})(UsersContainer);
