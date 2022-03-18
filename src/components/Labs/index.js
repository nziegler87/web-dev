import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles"
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <ReduxExamples/>
            <Link to="/Hello">
                Hello
            </Link>|
            <Link to="/tuiter/home">
                Tuiter
            </Link>
        </>
    )
};

export default Labs;