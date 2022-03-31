import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitListItem from "./tuit-list-item";
import {findALLTuits} from "../../actions/tuits-actions"


const TuitList = () => {
    const tuits = useSelector( state => state.tuits );
    const dispatch = useDispatch();
    useEffect(() => findALLTuits(dispatch), []);
    return (
        <ul className="list-group">
            {
                tuits.map && tuits.map(tuit => <TuitListItem key={tuit._id} post={tuit}/>)
            }
        </ul>
    )
}

export default TuitList;