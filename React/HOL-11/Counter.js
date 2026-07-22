import React, { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const sayHello = () => {
        alert("Hello! Member");
    };

    const increase = () => {
        increment();
        sayHello();
    };

    const sayWelcome = (message) => {
        alert(message);
    };

    const onPress = () => {
        alert("I was clicked");
    };

    return (
        <div className="counter">

            <h1>{count}</h1>

            <button onClick={increase}>
                Increment
            </button>

            <button onClick={decrement}>
                Decrement
            </button>

            <button onClick={() => sayWelcome("Welcome")}>
                Say Welcome
            </button>

            <button onClick={onPress}>
                Click on Me
            </button>

        </div>
    );
}

export default Counter;