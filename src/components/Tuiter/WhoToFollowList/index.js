import React from "react";

import WhoToFollowListItem from "../WhoToFollowListItem"
import who from "./who.json"

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
        <li key={"base"} className="list-group-item"><strong>Who to follow</strong></li>
        {who.map(who => {
        return (
            <WhoToFollowListItem key={who.id} who={who}/>
        );
    })
    }
        </ul>
    )
}
export default WhoToFollowList;