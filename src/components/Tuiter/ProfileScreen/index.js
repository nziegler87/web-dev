import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileScreen = () => {
    const profile_data = useSelector(state => state.profile )
    return (
        <>
            {/*Div to hold back arrow, name, and # of tuits*/}
            <div className={"d-flex align-items-center"}>
                <Link to="/tuiter">
                    <i className="fa-solid fa-arrow-left fa-xl text-white me-4 ms-3"/>
                </Link>
                <div>
                    <h5 className={"m-0"}><strong>{profile_data.firstName} {profile_data.lastName}</strong></h5>
                    <h6 className={"text-dark"}>{profile_data.tuitCount.toLocaleString()} Tweets</h6>
                </div>
            </div>

            {/*Div to hold banner and profile image*/}
            <div className={"wd-position-relative mb-2"}>
                <img src={profile_data.bannerPicture} className={"w-100"} alt={"banner"}/>
                <img src={profile_data.profilePicture} className={"rounded-circle wd-profile-img-format wd-profile-img-positioning"} alt={"profile"}/>
            </div>

            {/*Div to hold edit profile button*/}
            <div className={"d-flex justify-content-end"}>
                <Link to="/tuiter/edit-profile">
                    <button className={"btn btn-outline-dark rounded-pill"}>Edit Profile</button>
                </Link>
            </div>

            {/*Div to hold username and handle*/}
            <div className={"mb-3 wd-profile-top-margin"}>
                <h5 className={"m-0"}><strong>{profile_data.firstName} {profile_data.lastName}</strong></h5>
                <h6 className={"text-dark"}>@{profile_data.handle}</h6>
            </div>

            {/*Div to hold user bio*/}
            <div className={"mb-3"}>
                <h6>{profile_data.bio}</h6>
            </div>

            {/*Div to hold user stats*/}
            <div className={"d-flex flex-column flex-md-row mb-3"}>
                <div><i className="fa-solid fa-location-dot me-1"/>{profile_data.location}</div>
                <div><i className="fa-solid fa-cake-candles ms-md-4 me-1"/>Born {profile_data.dob}</div>
                <div><i className="fa-solid fa-calendar-days ms-md-4 me-1"/>Joined {profile_data.dateJoined}</div>
            </div>

            {/*Div to hold follwer/following details*/}
            <div>
                <span className={"text-white"}><strong>{profile_data.followingCount.toLocaleString()}</strong></span> Following
                <span className={"text-white ms-3"}><strong>{profile_data.followersCount.toLocaleString()}</strong></span> Followers
            </div>

        </>
    )
}
export default ProfileScreen;