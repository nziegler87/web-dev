import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) =>{
    const dispatch = useDispatch();
    const likeTuit = () =>{
        dispatch({type: 'like-tuit',
                         tuit: tuit});
    };

    return (
        <div className="d-flex justify-content-between w-75 mt-1">
            <span>
                <i className="far fa-comment text-white"/>
                <span className="text-dark"> {tuit.stats.comments}</span>
            </span>
            <span>
                <i className="fas fa-retweet text-white"/>
                <span className="text-dark"> {tuit.stats.retuits}</span>
            </span>
            <span onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart"
                       style={{color: 'red'}}
                    />
                }
                {
                    !tuit.liked &&
                    <i className="fas fa-heart"/>
                }
                <span className="text-dark"> {tuit.stats.likes}</span>
            </span>
            <span>
                <i className="fas fa-upload text-white"/>
            </span>
        </div>
    )
}
export default TuitStats;