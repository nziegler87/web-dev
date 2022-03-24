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
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Bio</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Location</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Birthday</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                </div>
            </div>
        </>
    )
}
export default EditProfileScreen;