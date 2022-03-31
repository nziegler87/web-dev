import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../actions/tuits-actions"

const WhatsHappening = () => {
    let [newTuit, setNewTuit] = useState({tuit: 'New tuit'});

    const dispatch = useDispatch();

    return (
        <div className="d-flex justify-content-between py-2">
            {/*User image*/}
            <img src={"./images/nyp_profile_pic.png"}
                 className="rounded-circle wd-image-who-to-follow me-3"
                 alt="nyp"/>
            <div className={"mb-2 w-100"}>
            <textarea value={newTuit.tuit}
                      onChange={(e) => setNewTuit({...newTuit, tuit: e.target.value})}
                      className={"w-100 bg-transparent border-bottom wd-no-outline text-dark border-secondary"}/>
            <br/>
                <div className={"d-flex justify-content-between"}>
                    <div>
                        <i className="fa-solid fa-image text-primary me-3"/>
                        <i className="fa-solid fa-chart-line text-primary me-3"/>
                        <i className="fa-solid fa-face-smile text-primary me-3"/>
                        <i className="fa-solid fa-calendar text-primary me-3"/>
                    </div>
                    <button onClick={() => createTuit(dispatch, newTuit)}
                            className={"btn btn-primary rounded-pill"}
                    >
                        Tuit
                    </button>
                </div>
            </div>
        </div>
    )
}
export default WhatsHappening;