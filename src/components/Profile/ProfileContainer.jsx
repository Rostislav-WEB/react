import React from "react";
import Profile from "./Profile"
import { setUsersProfile } from "../../redux/profile-reducer"
import { connect } from "react-redux";
import axios from "axios";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://social-network.samuraijs.com/api/1.0/profile/2',
        }).then(response => {
            this.props.setUsersProfile(response.data);
        })
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}
export default connect(mapStateToProps, { setUsersProfile })(ProfileContainer);
