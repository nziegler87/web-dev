import React from "react";

const NavigationSidebar = ({
                               active='explore'
                           }) => {
    return(
        <div>
            <div className="list-group">
                <a className="list-group-item text-center text-xl-start" href="/">
                    <i className="fa-brands fa-twitter me-xl-1"/>
                </a>
                <a className={`list-group-item text-center text-xl-start ${active === "home" ? "active" : ""}`} href="../HomeScreen/index.html">
                    <i className="fa fa-house me-xl-1"/>
                    <span className="d-none d-xl-inline-flex">Home</span>
                </a>
                <a className={`list-group-item text-center text-xl-start ${active === "explore" ? "active" : ""}`} href="../ExploreScreen/index.html">
                    <i className="fa fa-hashtag me-xl-1"/>
                    <span className="d-none d-xl-inline-flex">Explore</span>
                </a>
                <a className={`list-group-item text-center text-xl-start ${active === "notifications" ? "active" : ""}`} href="/">
                    <i className="fa fa-bell me-xl-1"/>
                    <span className="d-none d-xl-inline-flex">Notifications</span>
                </a>
                <a className={`list-group-item text-center text-xl-start ${active === "messages" ? "active" : ""}`} href="/">
                    <i className="fa fa-envelope me-xl-1"/>
                    <span className="d-none d-xl-inline-flex">Messages</span>
                </a>
                <a className={`list-group-item text-center text-xl-start ${active === "bookmarks" ? "active" : ""}`} href="/">
                    <i className="fa fa-bookmark me-xl-1"/>
                    <span className="d-none d-xl-inline-flex">Bookmarks</span>
                </a>
                <a className={`list-group-item text-center text-xl-start ${active === "lists" ? "active" : ""}`} href="/">
                    <i className="fa fa-list me-xl-1"/>
                    <span className="d-none d-xl-inline-flex">Lists</span>
                </a>
                <a className={`list-group-item text-center text-xl-start ${active === "profile" ? "active" : ""}`} href="/">
                    <i className="fa fa-user me-xl-1"/>
                    <span className="d-none d-xl-inline-flex">Profile</span>
                </a>
                <a className={`list-group-item text-center text-xl-start ${active === "more" ? "active" : ""}`} href="/">
                <span className="fa-stack wd-stack-small me-xl-1">
                    <i className="fa fa-circle fa-stack-2x"/>
                    <i className="fa fa-ellipsis fa-stack-1x text-dark"/>
                </span>
                    <span className="d-none d-xl-inline-flex">More</span>
                </a>
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