import React from "react";
import "./App.css";
import { AgilePractice } from "./components/AgilePractice";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Welcome to the Team 13 Page</header>
            <AgilePractice></AgilePractice>
            <hr></hr>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
