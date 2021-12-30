import React, { useEffect } from "react";
import { setUsersProfile } from "../../redux/profile-reducer";
import { useMatch } from "react-router";
import { connect } from "react-redux";
import axios from "axios";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    const match = useMatch('/profile/:userId/');
    useEffect(() => {
        let userId = match ? match.params.userId : 21535;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
          props.setUsersProfile(response.data);
        });
    })
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}
export default connect(mapStateToProps, {setUsersProfile})(Profile);

