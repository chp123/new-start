import React, { useEffect, useState } from 'react';
import './index.scss';
import WaterFall from '@src/components/waterfall';
import Category from '@src/components/category';
import { getRequest, IReponse } from '@src/request/index';
import Loading from '@src/components/loading';
import UserInfo from '@src/components/userInfo';

const My = () => {
    let [curCatNo, setCurCatNo] = useState(1);
    let catData = [
        { name: '笔记', catNo: 1 },
        { name: '收藏', catNo: 2 },
        { name: '点赞', catNo: 3 },
    ];
    let [cardData, setCardData] = useState([]);
    let [loading, setLoading] = useState(false);
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
    const handleChangeCategory = (data: any) => {
        setCurCatNo(data.catNo);
    };
    return (
        <div className='page-my'>
            <UserInfo />
            <Category data={catData} curCatNo={curCatNo} onClick={handleChangeCategory} />
            <Loading loading={loading}></Loading>
            <WaterFall data={cardData} />
        </div>
    );
};
export default My;
