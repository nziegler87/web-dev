import './vendors/bootstrap/css/bootstrap.min.css'
import './vendors/bootstrap/bootstrap.min.css'
import './vendors/fontawesome/css/all.min.css'
import './all.css'

import HelloWorld from "./components/HelloWorld";
import Tuiter from "./components/Tuiter";
import Labs from "./components/Labs";

import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/Tuiter/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path={["/","/labs"]} exact={true}>
                    <Labs/>
                </Route>
                <Route path="/tuiter" exact={true}>
                    <Tuiter/>
                </Route>
                <Route path="/tuiter/home" exact={true}>
                    <HomeScreen/>
                </Route>
                <Route path="/tuiter/explore" exact={true}>
                    <ExploreScreen/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
