import React from 'react';
import './index.scss';
import classnames from 'classnames';
import Card from '../card';

const WaterFall = (props: any) => {
    let arr = new Array(10);
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return (
        <div className={classnames('component-waterfall')}>
            {arr.map((item, index) => {
                return <Card key={index} />;
            })}
        </div>
    );
};
export default WaterFall;
