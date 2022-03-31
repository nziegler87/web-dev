import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../../actions/tuits-actions";

const TuitStats = ({tuit}) =>{
    const dispatch = useDispatch();

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
            <span onClick={() => updateTuit(
                dispatch, {...tuit, stats: {comments: tuit.stats.comments, retuits: tuit.stats.retuits, likes: tuit.stats.likes + 1, dislikes: tuit.stats.dislikes}})}>
                <i className="far fa-thumbs-up"/>
                <span className="text-dark"> {tuit.stats.likes}</span>
            </span>
            <span onClick={() => updateTuit(
                dispatch, {...tuit, stats: {comments: tuit.stats.comments, retuits: tuit.stats.retuits, likes: tuit.stats.likes, dislikes: tuit.stats.dislikes + 1}})}>
                <i className="far fa-thumbs-down"/>
                <span className="text-dark"> {tuit.stats.dislikes}</span>
            </span>
            <span>
                <i className="fas fa-upload text-white"/>
            </span>
        </div>
    )
}
export default TuitStats;