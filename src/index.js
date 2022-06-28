import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>Fucking World</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));