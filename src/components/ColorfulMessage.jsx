import React from 'react';

//　propsの練習
const ColorfulMessage = (props) => {
    const { color, children } = props;

    const contentStyle = {
        color: color,
        fontSize: '18px',
        border: '2px solid black'
    };

    return (
        <p style={contentStyle}>{children}</p>
    );
};

export default ColorfulMessage;