import React from "react";
import PostSummaryItem from "../PostSummaryItem";
import posts from "./posts.json"

const PostSummaryList = () =>{
    return (
        <div className="card" id="center-tuit-card">
            <ul className="list-group list-group-flush">
                {posts.map(posts => {
                return (<PostSummaryItem key={posts.id} post={posts}/>);
            })
            }
            </ul>
        </div>
    );
}
export default PostSummaryList;