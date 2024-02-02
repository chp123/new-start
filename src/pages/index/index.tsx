import React, { useEffect, useState } from 'react';
import './index.scss';
import WaterFall from '@src/components/waterfall';
import Category from '@src/components/category';
import { getRequest, IReponse } from '@src/request/index';
import Loading from '@src/components/loading';
import '@src/mock';

const Index = () => {
    let [curCatNo, setCurCatNo] = useState(1);
    let [catData, setCatData] = useState([]);
    let [cardData, setCardData] = useState([]);
    let [loading, setLoading] = useState(false);
    useEffect(() => {
        getData1();
    }, []);
    useEffect(() => {
        getData();
    }, [curCatNo]);
    const getData = () => {
        setLoading(true);
        getRequest('/test/card')
            .then((res: IReponse) => {
                console.log('===res===', res);
                setCardData(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
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
            <Loading loading={loading}></Loading>
            <WaterFall data={cardData} />
        </div>
    );
};
export default Index;
