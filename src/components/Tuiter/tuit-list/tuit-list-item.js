import React from "react";
import parse from "html-react-parser";
import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats/tuit-stats";
import {deleteTuit} from "../actions/tuits-actions";

const TuitListItem = ({
                          post = {
                              "_id": "234",
                              "topic": "Space",
                              "postedBy": {
                                  "username": "Scott Manley"
                              },
                              "liked": true,
                              "verified": true,
                              "handle": "DJSnM",
                              "postedOn": "2020-12-10",
                              "time": "1 day",
                              "title": "JavaScript is programming language that can run on browsers as well as desktops",
                              "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                              "logo-image": "./images/java_script_icon.jpeg",
                              "avatar-image": "./images/java_script_icon.jpeg",
                              "tuits": "123K",
                              "stats": {
                                  "comments": 123,
                                  "retuits": 234,
                                  "likes": 345
                              }
                          }}) => {

    const dispatch = useDispatch();

    const render_media = (post_input) => {
        if ( !post_input.hasOwnProperty("attachments") ) return;

        if ( post_input.attachments.hasOwnProperty("video") ){

            const src_link = "https://www.youtube.com/embed/" + post_input.attachments.video

            return (
                <iframe className="wd-tuit-media-format mt-1" width="560" height="315"
                        src={src_link}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            )
        }

        if ( post_input.attachments.hasOwnProperty("image") ){
            return (
                <img src={post_input.attachments.image}
                     className="wd-tuit-media-format mt-1"
                     alt={post.handle}
                />
            )
        }
    }

    return(
        <div className="list-group-item d-flex justify-content-start py-2" key={post.id}>
            {/*User image*/}
            <img src={post["avatar-image"]}
                 className="rounded-circle wd-image-who-to-follow me-3"
                 alt={post.handle}
            />

            {/*To Hold Main Tuit Content*/}
            <div className={"w-100"}>
                {/*To hold user name and close*/}
                <div className="d-flex justify-content-between">
                    <p className="m-0 text-white"><strong>
                        {post.postedBy.username}
                    </strong>
                        <span className="text-dark ms-1"> @{post.handle}</span></p>
                    <i onClick={() => deleteTuit(dispatch, post)}
                       className="fa-solid fa-xmark text-white"/>

                </div>
                <p className="m-0 text-white">{parse(post.tuit)}</p>

                {/*If post has an attachment, render the info*/}
                {render_media(post)}

                {/*Render Tuit Stats*/}
                <TuitStats tuit={post}/>

            </div>
        </div>
    )
}

export default TuitListItem;