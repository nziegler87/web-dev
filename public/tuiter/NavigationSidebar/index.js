const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            <a class="list-group-item text-center text-xl-start" href="/">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a class="list-group-item text-center text-xl-start ${active === "home" ? "active" : ""}" href="../HomeScreen/index.html">
                <i class="fa fa-house"></i>
                <span class="d-none d-xl-inline-flex">Home</span>
            </a>
            <a class="list-group-item text-center text-xl-start ${active === "explore" ? "active" : ""}" href="../ExploreScreen/index.html">
                <i class="fa fa-hashtag"></i>
                <span class="d-none d-xl-inline-flex">Explore</span>
            </a>
            <a class="list-group-item text-center text-xl-start ${active === "notifications" ? "active" : ""}" href="/">
                <i class="fa fa-bell"></i>
                <span class="d-none d-xl-inline-flex">Notifications</span>
            </a>
            <a class="list-group-item text-center text-xl-start ${active === "messages" ? "active" : ""}" href="/">
                <i class="fa fa-envelope"></i>
                <span class="d-none d-xl-inline-flex">Messages</span>
            </a>
            <a class="list-group-item text-center text-xl-start ${active === "bookmarks" ? "active" : ""}" href="/">
                <i class="fa fa-bookmark"></i>
                <span class="d-none d-xl-inline-flex">Bookmarks</span>
            </a>
            <a class="list-group-item text-center text-xl-start ${active === "lists" ? "active" : ""}" href="/">
                <i class="fa fa-list"></i>
                <span class="d-none d-xl-inline-flex">Lists</span>
            </a>
            <a class="list-group-item text-center text-xl-start ${active === "profile" ? "active" : ""}" href="/">
                <i class="fa fa-user"></i>
                <span class="d-none d-xl-inline-flex">Profile</span>
            </a>
            <a class="list-group-item text-center text-xl-start ${active === "more" ? "active" : ""}" href="/">
                <span class="fa-stack wd-stack-small">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-ellipsis fa-stack-1x text-dark"></i>
                </span>                
                <span class="d-none d-xl-inline-flex">More</span>
            </a>
        </div>
        <div class="d-grid mt-2">
            <a href="tuit.html" class="btn btn-primary btn-block rounded-pill">
                Tuit
            </a>
        </div>
    `);
}
export default NavigationSidebar;