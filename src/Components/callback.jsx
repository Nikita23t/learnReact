import React, { useState, useCallback } from 'react';

const CallbackExample = () => {
    const [count, setCount] = useState(0);


    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);


    const decrement = useCallback(() => {
        setCount(prevCount => prevCount - 1);
    }, []);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>+</button>
        </div>
    );
};

export default CallbackExample;
