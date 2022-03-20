import React from "react";
import PostListItem from "../PostListItem";
import posts from "./post.json";

const PostList = () => {
    return(
        <div>
            {posts.map(post => {
                return (<PostListItem key={post.id} post={post}/>);
            })
            }
        </div>
    );
}
export default PostList;