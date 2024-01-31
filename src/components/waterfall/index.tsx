import React, { useEffect, useState } from 'react';
import './index.scss';
import classnames from 'classnames';
import Card from '../card';
import IMAGES from '@src/constants/imgs';
import { debounce } from '../../tools';

const WaterFall = (props: any) => {
    let [columnCount, setColumnCount] = useState(0);
    let arr = new Array(10);
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const cardData = {
        img: IMAGES.CARD,
        title: '小红书小卡片小红书小卡片小红书小卡片小红书小卡片片小红书小卡片片小红书小卡片',
        name: '想飞的蜗牛',
        owner: IMAGES.OWNER,
        like: 300,
    };
    const getCount = () => {
        const wf = document.querySelector('.component-waterfall') as any;
        const offsetWidth = wf.offsetWidth;
        return Math.floor(offsetWidth / 190);
    };
    const handleResize = debounce(() => {
        setColumnCount(getCount());
    }, 100);
    useEffect(() => {
        setColumnCount(getCount());
        window.addEventListener('resize', handleResize);
        return document.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className={classnames('component-waterfall')} style={{ columnCount: columnCount }}>
            {arr.map((item, index) => {
                return <Card key={index} {...cardData} />;
            })}
        </div>
    );
};
export default WaterFall;
