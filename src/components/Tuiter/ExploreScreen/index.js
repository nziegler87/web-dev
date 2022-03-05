import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "../ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";


const ExploreScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <ExploreComponent/>
            </div>
            <div className="d-none d-lg-block col-lg-4">
                <WhoToFollowList/>
            </div>
        </div>
    )
}
export default ExploreScreen