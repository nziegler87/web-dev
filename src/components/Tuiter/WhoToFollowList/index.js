import React from "react";

import WhoToFollowListItem from "../WhoToFollowListItem"
import who from "./who.json"

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
        <li key={"base"} className="list-group-item"><strong>Who to follow</strong></li>
        {who.map(person => {
        return (
            <WhoToFollowListItem key={person.id} who={person}/>
        );
    })
    }
        </ul>
    )
}
export default WhoToFollowList;