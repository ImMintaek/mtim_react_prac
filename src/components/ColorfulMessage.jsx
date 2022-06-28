import React from 'react';

const ColorfulMessage = (props) => {
    const { color, children } = props;

    const contentStyle = {
        color: color,
        fontSize: '18px',
        fontWeight: 'bold'
    };

    return (
        <p style={contentStyle}>{children}</p>
    );
};

export default ColorfulMessage;