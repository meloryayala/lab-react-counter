import React, { useState } from "react";
import './Counter.css'

const Counter = () => {
    //inves do let contador = 0, o useState(valor icicial) alterado pelo setCounter
    const [counter, setCounter] = useState(0)

    //Handle é uma função de vai manusear algum evento
    const handleOnClick = operator => {
        const newValue = operator === '+'
            ? counter + 1
            : counter - 1

        setCounter(newValue)
    }

    return (
        <div className="counter">
            <button onClick={() => handleOnClick('+')}>+</button>
            <span>{counter}</span>
            <button onClick={() => handleOnClick('-')}>-</button>


        </div>
    )
}

export default Counter