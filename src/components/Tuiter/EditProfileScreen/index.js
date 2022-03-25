import React, {useState} from "react";
import {Link} from "react-router-dom";
import{useDispatch} from "react-redux";
import {useSelector} from "react-redux";


const EditProfileScreen = () => {
    const dispatch = useDispatch();
    let profile_data = useSelector( state => state.profile)

    const [local_profile_data, update_profile_data] = useState(profile_data);
    const profileChangeHandler = (event) => {
        switch ( event.target.id ){
            case "user_fname":
                update_profile_data({...local_profile_data, firstName: event.target.value});
                break;
            case "user_lname":
                update_profile_data({...local_profile_data, lastName: event.target.value});
                break;
            case "bio_text_area":
                update_profile_data({...local_profile_data, bio: event.target.value});
                break;
            case "website_input":
                update_profile_data({...local_profile_data, website: event.target.value});
                break;
            case "location_input":
                update_profile_data({...local_profile_data, location: event.target.value});
                break;
            case "birthday_input":
                update_profile_data({...local_profile_data, dob: event.target.value});
                break;
            default:
                // do nothing because we aren't recognizing it
                break;
        }
    }

    const saveProfileChangesHandler = () => {
        const action = {
            type: "update-profile",
            local_profile_data
        }
        dispatch(action);
    }

    return (
        <>
            <div className={"d-flex justify-content-between mb-2"}>
                <div className={"d-flex align-items-center"}>
                    <Link to="/tuiter/profile">
                        <i className="fa-solid fa-xmark fa-xl text-white ms-3 me-4"/>
                    </Link>
                    <div>
                        <h5 className={"m-0 text-white"}><strong>Edit Profile</strong></h5>
                    </div>
                </div>
                <Link to="/tuiter/profile" className={"btn btn-dark bg-white rounded-pill"}
                        onClick={saveProfileChangesHandler}>Save</Link>
            </div>

            {/*Div to hold banner and profile image*/}
            <div className={"wd-position-relative mb-2"}>
                {/*Div with relative positioning to hold banner image, div that greys image, and icons to edit image*/}
                <div className={"d-flex justify-content-center align-items-center"}>
                    {/*actual banner imgage*/}
                    <img src={local_profile_data.bannerPicture} className={"w-100"} alt={"banner"}/>
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
                        <img src={local_profile_data.profilePicture} className={"rounded-circle wd-profile-img-format"} alt={"profile"}/>
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
                        <label htmlFor="user_fname" className="form-label mt-1 ms-3 mb-0">First Name</label>
                        <input type="text" className="form-control shadow-none border-0 bg-transparent text-white" id="user_fname"
                               value={local_profile_data.firstName}
                               onChange={profileChangeHandler}
                        />
                    </div>
                    <div className={"border rounded border-dark mt-4"}>
                        <label htmlFor="user_lname" className="form-label mt-1 ms-3 mb-0">Last Name</label>
                        <input type="text" className="form-control shadow-none border-0 bg-transparent text-white" id="user_lname"
                               value={local_profile_data.lastName}
                               onChange={profileChangeHandler}
                        />
                    </div>
                    <div className={"border rounded border-dark mt-4"}>
                    <label htmlFor="bio_text_area" className="form-label mt-1 ms-3 mb-0">Bio</label>
                    <textarea className="form-control shadow-none border-0 bg-transparent text-white" id="bio_text_area"
                              value={local_profile_data.bio}
                              onChange={profileChangeHandler}

                    />
                    </div>
                    <div className={"border rounded border-dark mt-4"}>
                        <label htmlFor="website_input" className="form-label mt-1 ms-3 mb-0">Website</label>
                        <input type="text" className="form-control shadow-none border-0 bg-transparent text-white" id="website_input"
                               value={local_profile_data.website}
                               onChange={profileChangeHandler}
                        />
                    </div>
                    <div className={"border rounded border-dark mt-4"}>
                    <label htmlFor="location_input" className="form-label mt-1 ms-3 mb-0">Location</label>
                    <input type="text" className="form-control shadow-none border-0 bg-transparent text-white" id="location_input"
                           value={local_profile_data.location}
                           onChange={profileChangeHandler}
                    />
                    </div>
                    <div className={"border rounded border-dark mt-4"}>
                    <label htmlFor="birthday_input" className="form-label mt-1 ms-3 mb-0">Birthday</label>
                    <input type="date" className="form-control shadow-none border-0 bg-transparent text-white" id="birthday_input"
                           value={local_profile_data.dob}
                           onChange={profileChangeHandler}
                    />
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProfileScreen;