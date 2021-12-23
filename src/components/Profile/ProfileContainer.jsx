import React from "react";
import Profile from "./Profile"
import { setUsersProfile } from "../../redux/profile-reducer"
import { connect } from "react-redux";
import axios from "axios";
import { useMatch } from "react-router";

class ProfileContainer extends React.Component {

    // componentDidMount() {
    //     axios({
    //         method: 'get',
    //         url: 'https://social-network.samuraijs.com/api/1.0/profile/2',
    //     }).then(response => {
    //         this.props.setUsersProfile(response.data);
    //     })
    // }
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
          this.props.setUsersProfile(response.data);
        });
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match} />;
  }
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}
export default connect(mapStateToProps, { setUsersProfile })(ProfileURLMatch);
