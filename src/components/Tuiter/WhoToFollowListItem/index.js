import React from "react";

const WhoToFollowListItem = ({ who = {
    avatarIcon: "https://www.seekpng.com/png/detail/514-5147412_default-avatar-icon.png",
    userName: "Sky Doe",
    handle: "sky_doe",
    verified: true,
}}) => {
    return (
        <div>
            <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <img src={who.avatarIcon} className="rounded-circle wd-image-who-to-follow"/>
                <div className="ms-2">
                    {who.userName}
                    {who.verified ? <i className='mx-1 fa-solid fa-circle-check'/> : ""} <br/>
                    <span className="text-dark">@{who.handle}</span>
                </div>
            </div>
            <a className="btn btn-primary btn-sm rounded-pill" href="#">Follow</a>
            </li>
        </div>
    )
}
export default WhoToFollowListItem;