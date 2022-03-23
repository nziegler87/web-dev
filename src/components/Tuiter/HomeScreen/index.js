import React from "react";
import TuitList from "../tuit-list";
import WhatsHappening from "../tuit-list/whats-happening";




const HomeScreen = () => {
    return(
        <div>
            <h2>Home</h2>
            <WhatsHappening/>
            <TuitList/>
        </div>
    )
}
export default HomeScreen;