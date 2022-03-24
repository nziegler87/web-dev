import React from "react";
import {Link} from "react-router-dom";

const ProfileScreen = () => {
    return (
        <>
            {/*Div to hold back arrow, name, and # of tuits*/}
            <div className={"d-flex align-items-center"}>
                <Link to="/tuiter">
                    <i className="fa-solid fa-arrow-left fa-xl text-white me-4 ms-3"/>
                </Link>
                <div>
                    <h5 className={"m-0"}><strong>Nathanial Ziegler</strong></h5>
                    <h6 className={"text-dark"}>5,196 Tweets</h6>
                </div>
            </div>

            {/*Div to hold banner and profile image*/}
            <div className={"wd-position-relative mb-2"}>
                <img src="../../images/t1_loco.jpg" className={"w-100"} alt={"banner"}/>
                <img src={"../../images/profile_picture.jpeg"} className={"rounded-circle wd-profile-img-format wd-profile-img-positioning"} alt={"profile"}/>
            </div>

            {/*Div to hold edit profile button*/}
            <div className={"d-flex justify-content-end"}>
                <Link to="/tuiter/edit-profile">
                    <button className={"btn btn-outline-dark rounded-pill"}>Edit Profile</button>
                </Link>
            </div>

            {/*Div to hold username and handle*/}
            <div className={"mb-3 wd-profile-top-margin"}>
                <h5 className={"m-0"}><strong>Nathanial Ziegler</strong></h5>
                <h6 className={"text-dark"}>@nziegler</h6>
            </div>

            {/*Div to hold user bio*/}
            <div className={"mb-3"}>
                <h6>Current co-op advisor. Future Software Engineer. Train aficionado. Retuits and likes are endorsements.</h6>
            </div>

            {/*Div to hold user stats*/}
            <div className={"mb-3"}>
                <i className="fa-solid fa-location-dot me-1"/>Boston, MA
                <i className="fa-solid fa-cake-candles ms-4 me-1"/>Born January 11, 1987
                <i className="fa-solid fa-calendar-days ms-4 me-1"/>Joined March 24, 2022
            </div>

            {/*Div to hold follwer/following details*/}
            <div>
                <span className={"text-white"}><strong>312</strong></span> Following
                <span className={"text-white ms-3"}><strong>180</strong></span> Followers
            </div>

        </>
    )
}
export default ProfileScreen;