import React from 'react';
import ColorfulMessage from './components/ColorfulMessage';


const App = () => {
    const onClickButton = () => {
        alert("Fuck");
    };
    return (
        <>
            <h1 style={{ color: 'red' }}>Hello World</h1>
            <ColorfulMessage color="blue">
                ogennkidesuka?
            </ColorfulMessage>
            <ColorfulMessage color="pink">
                gennkidesu!
            </ColorfulMessage>
            <button onClick={onClickButton}>Button</button>
        </>
    );
};

export default App;