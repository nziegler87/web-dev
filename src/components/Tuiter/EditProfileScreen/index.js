import React from "react";
import {Link} from "react-router-dom";

const EditProfileScreen = () => {
    return (
        <>
            <div className={"d-flex justify-content-between mb-2"}>
                <div className={"d-flex align-items-center"}>
                    <Link to="/tuiter/profile">
                        <i className="fa-solid fa-xmark fa-xl text-dark ms-3 me-4"/>
                    </Link>
                    <div>
                        <h5 className={"m-0 text-dark"}><strong>Edit Profile</strong></h5>
                    </div>
                </div>
                <button className={"btn btn-dark rounded-pill"}>Save</button>
            </div>

            {/*Div to hold banner and profile image*/}
            <div className={"wd-position-relative mb-2"}>
                <div className={"wd-position-relative"}>
                    <div className={"wd-grey-fill"}>
                        <img src="../../images/t1_loco.jpg" className={"w-100"} alt={"banner"}/>
                    </div>
                    <div className={"wd-centered-overlay"}>
                        <i className="fa-solid fa-camera fa-xl text-white me-3"/>
                        <i className="fa-solid fa-xmark fa-xl text-white"/>
                    </div>
                </div>
                <div>
                    <img src={"../../images/profile_picture.jpeg"} className={"rounded-circle wd-profile-profile-img"} alt={"profile"}/>
                </div>
            </div>

            {/*Div to hold username and handle*/}
            <div className={"mb-3 wd-edit-profile-top-margin"}>
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
export default EditProfileScreen;