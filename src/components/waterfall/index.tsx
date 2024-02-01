import React, { useEffect, useState } from 'react';
import './index.scss';
import classnames from 'classnames';
import Card from '../card';
import { debounce } from '../../tools';

const WaterFall = (props: any) => {
    let [columnCount, setColumnCount] = useState(0);
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
            {props.data.map((item, index) => {
                return <Card key={index} {...item} />;
            })}
        </div>
    );
};
export default WaterFall;
