import NavigationSidebar from "../NavigationSidebar"
import ExploreComponent from "./index.js"
import WhoToFollowList from "../WhoToFollowList"


(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-lg-1 col-xl-2">
                ${NavigationSidebar("explore")}
            </div>   
            <div class="col-10 col-lg-7 col-xl-6">
                ${ExploreComponent()}
            </div>
            <div class="d-none d-lg-block col-lg-4">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})
($);
