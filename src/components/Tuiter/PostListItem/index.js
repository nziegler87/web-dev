import React from "react";



const PostListItem = ({post = {"userName": "@elonmusk",
    "displayName": "Elon Musk",
    "userImage": "./images/elon_profile_pic.jpeg",
    "verified": true,
    "time": "23h",
    "title": "Amazing show about <a href='#'>@Inspiration4x</a> mission!",
    "cardImage": "./images/inspiration_mission.jpeg",
    "imageOnly": false,
    "cardTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    "cardBody": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
    "cardLink": "https://www.netflix.com",
    "cardLinkText": "netflix.com",
    "comments": "4.2K",
    "retuits": "3.5K",
    "likes": "37.5K"
}}) => {
    const parse = require('html-react-parser');

    return (
        <div className="d-flex justify-content-start border-bottom border-secondary py-2">
            {/*User image*/}
            <img src={post.userImage}
                 className="rounded-circle wd-image-who-to-follow me-3"
                 alt="user profile"
            />
            {/*To Hold Main Tuit Content*/}
            <div>
                {/*To hold user name and elipsis*/}
                <div className="d-flex justify-content-between">
                    <p className="m-0 text-white">{post.displayName}<span
                        className="text-dark ms-1">{post.userName} • {post.time}</span></p>
                    <a href="/#">
                        <i className="fas fa-ellipsis-h text-dark"/>
                    </a>
                </div>
                <p className="m-0 text-white">{parse(post.title)}</p>
                <div className="border border-secondary mt-2 mb-1 overflow-hidden wd-border-radius-10">
                    <img src={post.cardImage} className="img-fluid" alt={"card imge"}/>
                    <div className={`p-2 border-top border-secondary ${post.imageOnly === true ? "d-none" : ""}`}>
                        <h6>{post.cardTitle}</h6>
                        <p className="m-0">{post.cardBody}</p>
                        <a href={post.cardLink} className="text-secondary"><span
                            className={`me-2 ${post.cardLink === "" ? "d-none" : ""}`}>&#128279;</span>{post.cardLinkText}
                        </a>
                    </div>
                </div>

                {/*Container to hold icons*/}
                <div className="d-flex justify-content-between w-75">
                    <a href="/#">
                        <i className="far fa-comment text-dark"/>
                        <span className="text-dark"> {post.comments}</span>
                    </a>
                    <a href="/#">
                        <i className="fas fa-retweet text-dark"/>
                        <span className="text-dark"> {post.retuits}</span>
                    </a>
                    <a href="/#">
                        <i className="fas fa-heart text-dark"/>
                        <span className="text-dark"> {post.likes}</span>
                    </a>
                    <a href="/#">
                        <i className="fas fa-upload text-dark"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default PostListItem;