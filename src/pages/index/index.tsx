import React, { useState } from 'react';
import './index.scss';
import WaterFall from '@src/components/waterfall';
import Category from '@src/components/category';

const Index = () => {
    let [curCatNo, setCurCatNo] = useState(1);
    const catdata = [
        { name: '推荐', catNo: 1 },
        { name: '附近', catNo: 2 },
        { name: '游戏', catNo: 3 },
    ];
    return (
        <div className='page-index'>
            <Category
                data={catdata}
                curCatNo={curCatNo}
                onClick={(data) => setCurCatNo(data.catNo)}
            />
            <WaterFall />

            <a href='./app.html'>去app</a>
            <a href='./single.html#/app'>去单页面</a>
        </div>
    );
};
export default Index;
