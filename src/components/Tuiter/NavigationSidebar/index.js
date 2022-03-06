import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
                               active='explore'
                           }) => {
    return(
        <div>
            <div className="list-group">
                <Link to="/" className="list-group-item text-center text-xl-start">
                    <i className="fa-brands fa-twitter me-xl-1"/>
                </Link>
                <Link to="/tuiter/home" className={`list-group-item text-center text-xl-start ${active === "home" ? "active" : ""}`}>
                    <i className="fa fa-house me-xl-1"/>
                    <span className="d-none d-xl-inline-flex">Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item text-center text-xl-start ${active === "explore" ? "active" : ""}`}>
                    <i className="fa fa-hashtag me-xl-1"/>
                    <span className="d-none d-xl-inline-flex">Explore</span>
                </Link>
                <Link to="/" className={`list-group-item text-center text-xl-start ${active === "notifications" ? "active" : ""}`}>
                    <i className="fa fa-bell me-xl-1"/>
                    <span className="d-none d-xl-inline-flex">Notifications</span>
                </Link>
                <Link to="/" className={`list-group-item text-center text-xl-start ${active === "messages" ? "active" : ""}`}>
                    <i className="fa fa-envelope me-xl-1"/>
                    <span className="d-none d-xl-inline-flex">Messages</span>
                </Link>
                <Link to="/" className={`list-group-item text-center text-xl-start ${active === "bookmarks" ? "active" : ""}`}>
                    <i className="fa fa-bookmark me-xl-1"/>
                    <span className="d-none d-xl-inline-flex">Bookmarks</span>
                </Link>
                <Link to="/" className={`list-group-item text-center text-xl-start ${active === "lists" ? "active" : ""}`}>
                    <i className="fa fa-list me-xl-1"/>
                    <span className="d-none d-xl-inline-flex">Lists</span>
                </Link>
                <Link to="/" className={`list-group-item text-center text-xl-start ${active === "profile" ? "active" : ""}`}>
                    <i className="fa fa-user me-xl-1"/>
                    <span className="d-none d-xl-inline-flex">Profile</span>
                </Link>
                <Link to="/" className={`list-group-item text-center text-xl-start ${active === "more" ? "active" : ""}`}>
                <span className="fa-stack wd-stack-small me-xl-1">
                    <i className="fa fa-circle fa-stack-2x"/>
                    <i className="fa fa-ellipsis fa-stack-1x text-dark"/>
                </span>
                    <span className="d-none d-xl-inline-flex">More</span>
                </Link>
            </div>
            <div className="d-grid mt-2">
                <a href="tuit.html" className="btn btn-primary btn-block rounded-pill">
                    Tuit
                </a>
            </div>
        </div>
    );
}
export default NavigationSidebar;