import {useState} from "react";

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
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={dicrement}>-</button>
        </div>
    )
}
export default Counter;