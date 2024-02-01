import React, { useEffect, useState } from 'react';
import './index.scss';
import WaterFall from '@src/components/waterfall';
import Category from '@src/components/category';
import { getRequest, IReponse } from '@src/request/index';
import '@src/mock';

const Index = () => {
    let [curCatNo, setCurCatNo] = useState(1);
    let [catData, setCatData] = useState([]);
    let [cardData, setCardData] = useState([]);
    useEffect(() => {
        getData1();
    }, []);
    useEffect(() => {
        getData();
    }, [curCatNo]);
    const getData = () => {
        getRequest('/test/card').then((res: IReponse) => {
            console.log('===res===', res);
            setCardData(res.data);
        });
    };
    const getData1 = () => {
        getRequest('/test/category').then((res: IReponse) => {
            console.log('===res===', res);
            setCatData(res.data);
        });
    };
    const handleChangeCategory = (data: any) => {
        setCurCatNo(data.catNo);
    };
    return (
        <div className='page-index'>
            <Category data={catData} curCatNo={curCatNo} onClick={handleChangeCategory} />
            <WaterFall data={cardData} />

            <a href='./app.html'>去app</a>
            <a href='./single.html#/app'>去单页面</a>
        </div>
    );
};
export default Index;
