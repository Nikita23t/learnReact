import {useState, useEffect} from "react";

const Counter = function ()  {
    const [count, setCount] = useState(0);


    function increment() {
        setCount(count + 1)
    }

    function dicrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={dicrement}>-</button>
        </div>
    )
}
export default Counter;