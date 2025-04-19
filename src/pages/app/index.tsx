import React, { useEffect, useState } from 'react';
import './index.scss';
import Cart from './study/cart';

const App = () => {
    let [index, setIndex] = useState(0);
    const handleClick = () => {
        setIndex(1);
        setIndex(2);
        setIndex(3);

        setIndex(index + 1);
        setIndex(index + 1);
        setIndex(index + 1);

        setIndex((index) => index + 1);
        setIndex((index) => index + 1);
        setIndex((index) => index + 1);
        console.log(index);
    };

    return (
        <div>
            <Cart></Cart>
            <h2>{index}</h2>
            <button onClick={() => handleClick()}>更新</button>
            <h1 className='name'>Hello World! 这里是app</h1>
            <a href='./index.html'>去首页</a>
            <a href='./single.html#/index'>去单页面</a>
        </div>
    );
};
export default App;
