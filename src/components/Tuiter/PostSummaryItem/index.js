import React from "react";

const PostSummaryItem = ({
                             post = {id:"0test",
                                 topic: "Web Development",
                                 userName: "ReactJS",
                                 verified: true,
                                 time: "2h",
                                 title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 image: "./images/react_js_icon.png"
                             }}) => {

    let num_tuits = <span className='text-muted m-0'>{post.tweets} Tuits</span>

    return(
        <div>
            <li className="list-group-item d-flex justify-content-between align-items-center" key={post.id}>
                <div>
                    <p className="text-muted m-0">
                        {post.topic}
                    </p>
                    <p className="font-weight-bold m-0">
                        <strong>{post.userName}</strong>
                        {post.verified ? <i className='mx-1 fa-solid fa-circle-check'/> : ""}
                        <span className="text-muted">- {post.time}</span></p>
                    <p className="m-0">
                        {post.title}
                    </p>
                    <p className={"m-0"}>
                        {post.hasOwnProperty('tweets') ? num_tuits : ""}
                    </p>
                </div>
                <img src={post.image}
                     className="rounded wd-image-thumbnail-size-override"
                     alt={"description"}
                >
                </img>
            </li>
        </div>
    )
}
export default PostSummaryItem;