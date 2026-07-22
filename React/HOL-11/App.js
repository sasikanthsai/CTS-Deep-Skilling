import React from "react";
import "./App.css";
import Counter from "./Counter";
import CurrencyConverter from "./CurrencyConverter";

function App() {
    return (
        <div className="App">

            <h1 className="title">
                🚀 React Event Handling Assignment
            </h1>

            <Counter />

            <hr />

            <CurrencyConverter />

        </div>
    );
}

export default App;