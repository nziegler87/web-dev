import React from "react";
import PostListItem from "../PostListItem";
import posts from "./post.json";

const PostList = () => {
    return(
        <div>
            {posts.map(posts => {
                return (<PostListItem post = {posts}/>);
            })
            }
        </div>
    );
}

export default PostList;