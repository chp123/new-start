import React from 'react';
import './index.scss';
import WaterFall from '@src/components/waterfall';

const Index = () => {
    return (
        <div className='page-index'>
            <WaterFall />
            <a href='./app.html'>去app</a>
            <a href='./single.html#/app'>去单页面</a>
        </div>
    );
};
export default Index;
