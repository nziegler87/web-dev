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
                {/*Div with relative positioning to hold banner image, div that greys image, and icons to edit image*/}
                <div className={"d-flex justify-content-center align-items-center"}>
                    {/*actual banner imgage*/}
                    <img src="../../images/t1_loco.jpg" className={"w-100"} alt={"banner"}/>
                    {/*div to grey out image*/}
                    <div className={"wd-grey-fill wd-position-absolute"}/>
                    {/*div to hold edit icons*/}
                    <div className={"wd-position-absolute"}>
                        <i className="fa-solid fa-camera fa-xl text-white me-5"/>
                        <i className="fa-solid fa-xmark fa-xl text-white"/>
                    </div>
                </div>
                <div className={"wd-profile-img-positioning"}>
                    <div className={"wd-position-relative d-flex justify-content-center align-items-center"}>
                        <img src={"../../images/profile_picture.jpeg"} className={"rounded-circle wd-profile-img-format"} alt={"profile"}/>
                        <div className={"wd-grey-fill wd-position-absolute rounded-circle wd-profile-img-format"}/>
                        <div className={"wd-position-absolute"}>
                            <i className="fa-solid fa-camera fa-xl text-white"/>
                        </div>
                    </div>
                </div>
            </div>

            {/*Div to hold username and handle*/}
            <div className={"mb-3 wd-edit-profile-top-margin"}>
                <div className="form-group">
                    <div className={"border rounded border-dark"}>
                        <label htmlFor="user_name" className="form-label mt-1 ms-3 mb-0">Name</label>
                        <input type="text" className="form-control shadow-none border-0 bg-transparent text-white" id="user_name"
                               value="Nathanial Ziegler"/>
                    </div>
                    <div className={"border rounded border-dark mt-4"}>
                    <label htmlFor="bio_text_area" className="form-label mt-1 ms-3 mb-0">Bio</label>
                    <textarea className="form-control shadow-none border-0 bg-transparent text-white" id="bio_text_area"
                           value="Current co-op advisor. Future Software Engineer. Train aficionado. Retuits and likes are endorsements."/>
                    </div>
                    <div className={"border rounded border-dark mt-4"}>
                    <label htmlFor="location_input" className="form-label mt-1 ms-3 mb-0">Location</label>
                    <input type="text" className="form-control shadow-none border-0 bg-transparent text-white" id="location_input"
                           value="Boston, MA"/>
                    </div>
                    <div className={"border rounded border-dark mt-4"}>
                    <label htmlFor="birthday_input" className="form-label mt-1 ms-3 mb-0">Birthday</label>
                    <input type="date" className="form-control shadow-none border-0 bg-transparent text-white" id="birthday_input"
                           value="1987-01-11"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProfileScreen;