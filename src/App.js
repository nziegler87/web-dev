import './vendors/bootstrap/css/bootstrap.min.css'
import './vendors/bootstrap/bootstrap.min.css'
import './vendors/fontawesome/css/all.min.css'
import './all.css'

import HelloWorld from "./components/HelloWorld";
import Tuiter from "./components/Tuiter";
import Labs from "./components/Labs";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/Tuiter/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path={"/"}
                           exact={true}
                           element={<Labs/>}/>
                    <Route path={"/labs"}
                           exact={true}
                           element={<Labs/>}/>
                    <Route path="/tuiter"
                           exact={true}
                           element={<Tuiter/>}/>
                    <Route path="/tuiter/home"
                           exact={true}
                           element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore"
                           exact={true}
                           element={<ExploreScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
