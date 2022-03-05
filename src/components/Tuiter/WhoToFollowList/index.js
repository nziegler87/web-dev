import React from "react";

import WhoToFollowListItem from "../WhoToFollowListItem"
import who from "./who.json"

const WhoToFollowList = () => {
    return (
        <ul class="list-group">
        <li class="list-group-item"><strong>Who to follow</strong></li>
        {who.map(who => {
        return (
            <WhoToFollowListItem who={who}/>
        );
    })
    }
        </ul>
    )
}
export default WhoToFollowList;