import React, { useEffect, useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';


const App = () => {
    console.log("first!!");
    // useStateの練習
    //　初期値が0のnum関数をセット
    const [num, setNum] = useState(0);

    //　初期値がfalseのfaceShowFlag関数をセット
    const [faceShowFlag, setFaceShowFlag] = useState(false);

    //　ボタンをクリックするとnum+1を返す
    const onClickCountUp = () => {
        setNum(num + 1);
    };

    //　ボタンをクリックするとfaceShowFlagの現在値の反対値を返す
    const onClickSwitchShowFlag = () => {
        setFaceShowFlag(!faceShowFlag);
    };


    //　useEffectの練習
    useEffect(() => {
        if (num > 0){
            if (num % 3 === 0) {
                faceShowFlag || setFaceShowFlag(true);
            } else {
                faceShowFlag && setFaceShowFlag(false);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, [num]);
    
    return (
        <>
            <h1 style={{ color: 'red' }}>Hello World</h1>
            <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage> 
            <ColorfulMessage color="pink">元気です！</ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <br/>
            <button onClick={onClickSwitchShowFlag}>on/off</button>
            <p>{num}</p>
            {faceShowFlag && <p>~ _ ~</p>}
        </>
    );
};

export default App;