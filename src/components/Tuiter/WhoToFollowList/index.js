import React from "react";

import WhoToFollowListItem from "../WhoToFollowListItem"
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who )
    return (
        <>
            <h1>Who To Follow!!</h1>
            <ul className="list-group">
                <li key={"base"} className="list-group-item"><strong>Who to follow</strong></li>
                {who.map(who => {
                    return (
                        <WhoToFollowListItem key={who.id} who={who}/>
                    );
                })
                }
            </ul>
        </>
    )
}
export default WhoToFollowList;