import React, { Component, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if(count < 5){
            setCount(count+1)
        }
    }
    const decrement = () => {
        if(count > 0){
            setCount(count-1)
        }
    }

    return ( <CounterComponent 
            count={count}
            increment={increment}
            decrement={decrement}
        /> );
}
 

const CounterComponent = ({count,increment,decrement}) => {
    return ( <div className="counter">
    <h2>{count}</h2>
    <div className="btns">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
</div> );
}
 
 
export default Counter;