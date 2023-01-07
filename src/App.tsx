import React from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Money from "./views/Money";
import Tags from "./views/Tags";
import Tag from "./views/Tag";
import Statistics from "./views/Statistics";
import NoMatch from "./views/NonMatch";

function App() {
    return (
        <Router>
            <Routes>
                <Route  path="/"  element={<Money/>}>
                    {/*<Tags/>*/}
                </Route>
                <Route  path="/tags" element={<Tags/>}>
                    {/*<Tags/>*/}
                </Route>
                <Route path="/tags/:id"  element={<Tag/>}>
                    {/*<Tag/>*/}
                </Route>
                <Route path="/money" element={<Money/>}>
                    {/*<Money/>*/}
                </Route>
                <Route path="/statistics" element={<Statistics/>}>
                    {/*<Statistics/>*/}
                </Route>
                {/*<Navigate to='/money'/>*/}
                {/*<Route path="*">*/}
                {/*    <NoMatch/>*/}
                {/*</Route>*/}
            </Routes>
        </Router>
    );
}

export default App
