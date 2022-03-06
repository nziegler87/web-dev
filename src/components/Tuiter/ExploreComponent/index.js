import React from "react";

import PostSummaryList from "../PostSummaryList/index.js"

const ExploreComponent = () => {
    return(
        <div>
            {/*Search Content*/}
            <div className="d-flex align-items-center mb-2">
                <div className="d-flex w-100 align-items-center border rounded-pill me-2 ps-3 bg-white">
                    <i className="fas fa-search text-muted" id="center-search-icon"/>
                    <input type="text" id="center-search-input " className="form-control flex-fill me-4 border-0" placeholder="Search Tuiter"/>
                </div>
                {/*Cog Icon*/}
                <a href="/#">
                    <i className="fas fa-cog text-primary fa-2x" id="center-cog-icon"/>
                </a>
            </div>

            {/*Nav Bar*/}
            <ul className="nav nav-tabs mb-2">
                <li className="nav-item" id="center-nav-for-you">
                    <a className="nav-link active" aria-current="page" href="for-you.html">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="center-nav-trending" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="center-nav-news" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="center-nav-sports" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-md-flex">
                    <a className="nav-link" id="center-nav-entertainment" href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            {/*Banner Image*/}
            <div className="position-relative">
                <img className="card-img mb-2"
                     id="center-banner-image"
                     src="./images/starship.webp"
                     alt="SpaceX Starship"/>
                    <h1 className="position-absolute bottom-0 ms-2">SpaceX's Starship</h1>
            </div>

            {/*Tuit Cards*/}
            <PostSummaryList/>
        </div>
)
}
export default ExploreComponent;