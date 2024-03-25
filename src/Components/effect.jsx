import {useState, useEffect} from "react";

const Effect = function () {
    const [color, setColor] = useState('black');
    useEffect(() => {
        document.body.style.background = color;
        document.body.style.color = 'black';
    }, [color]);

    function changeColor() {
        setColor('white')
    }

    function changeColorBlack() {
        setColor('black')
    }

    return (
        <div>
            <button onClick={changeColor}>Включить свет</button>
            <button onClick={changeColorBlack}>Выключить свет</button>
        </div>
    )
}

export default Effect;