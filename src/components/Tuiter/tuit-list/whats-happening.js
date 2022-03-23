import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');

    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
                         tuit: whatsHappening
        })
    }

    return (
        <div className={"mb-3"}>
            <textarea value={whatsHappening}
                      onChange={(event) => setWhatsHappening(event.target.value)}
                      className={"w-100 bg-transparent border-bottom wd-no-outline text-dark"}>
                What is happening?
            </textarea><br/>
            <button onClick={tuitClickHandler}
                    className={"btn btn-primary rounded-pill"}
            >
                Tuit
            </button>
        </div>
    )
}
export default WhatsHappening;