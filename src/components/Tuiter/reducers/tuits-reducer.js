import React from "react";
import tuits from "../data/tuits.json";

const tuitsReducer = ( state = tuits, action) => {
    switch ( action.type ){
        case 'like-tuit':
            return state.map(tuits => {
                if ( tuits._id === action.tuit._id) {
                    if ( tuits.liked ) tuits.stats.likes--;
                    else tuits.stats.likes++;
                    tuits.liked = !tuits.liked;

                    return tuits;
                } else {
                    return tuits;
                }
            })
        case 'delete-tuit':
            return ( state.filter(tuits => tuits._id !== action.tuit._id))
        case 'create-tuit':
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                postedBy: {
                    username: "ReactJS"
                },
                handle: "ReactJS",
                "avatar-image": "./images/java_script_icon.jpeg",
                stats: {
                    retuits: 11,
                    likes: 22,
                    replies: 333
                }
            }
            return [newTuit,...state];
        default:
            return state;
    }
}

export default tuitsReducer;