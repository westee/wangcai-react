import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";

const Wrapper = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
    border: 1px solid green;
    flex-grow: 1;
`

function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                        <Route path="/tags">
                            <Tags/>
                        </Route>
                        <Route path="/money">
                            <Money/>
                        </Route>
                        <Route path="/statistics">
                            <Statistics/>
                        </Route>
                        <Redirect exact from='/' to='/money'/>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
                </Main>

                <Nav />
            </Wrapper>
        </Router>
    );
}

function NoMatch() {
    return <h2>页面不存在</h2>
}

function Statistics() {
    return <h2>Statistics</h2>;
}

function Tags() {
    return <h2>Tags</h2>;
}

function Money() {
    return <h2>Money</h2>;
}

export default App