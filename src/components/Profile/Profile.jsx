/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useEffect, useState } from "react";
import { setUsersProfile } from "../../redux/profile-reducer";
import { useMatch } from "react-router";
import { connect } from "react-redux";
import axios from "axios";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";

const Profile = (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const match = useMatch('/profile/:userId/')
    useEffect(() => {

        const fetchData = async () => {
            let userId = match ? match.params.userId : 21535;
            setLoading(true);
            try {
                const { data: response } = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`);
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, [])

    
    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()


    return (
        <div>
            <ProfileInfo data={data} loading={loading} />
            <MyPostsContainer />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}
export default compose(
    connect(mapStateToProps, { setUsersProfile }),
    withAuthRedirect
)(Profile)