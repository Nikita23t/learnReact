import React, { createContext, useContext, useEffect, useState } from 'react';

const Color = function () {
    const [color, setColor] = useState('white');
    useEffect(() => {
        document.body.style.background = color;
        document.body.style.color = color === 'black' ? 'white' : 'black';
    }, [color]);

    const changeColor = () => {
        setColor('white');
    };

    const changeColorBlack = () => {
        setColor('black');
    };

    const ThemeContext = createContext(color);

    const ThemeProvider = ({ children }) => {
        return <ThemeContext.Provider value={color}>{children}</ThemeContext.Provider>;
    };

    const ThemeComponent = () => {
        const theme = useContext(ThemeContext);

        return <div style={{ background: theme, color: theme === 'black' ? 'white' : 'black' }}>Тема: {theme}</div>;
    };

    return (
        <ThemeProvider>
            <ThemeComponent />
            <button onClick={changeColor}>Сменить на белый</button>
            <button onClick={changeColorBlack}>Сменить на черный</button>
        </ThemeProvider>
    );
};

export default Color;