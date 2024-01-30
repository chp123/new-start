import React from 'react';
import './index.scss';
import classnames from 'classnames';

const Card = () => {
    const img = 'https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF';
    const img1 = 'https://t7.baidu.com/it/u=4254919379,3719403362&fm=193&f=GIF';
    let h = Math.random() * 100 + 200 + 'px';
    return (
        <div className={classnames('component-card')}>
            <img className='img' src={img} style={{ height: h }}></img>
            <div className='title'>
                小红书小卡片小红书小卡片小红书小卡片小红书小卡片片小红书小卡片片小红书小卡片
            </div>
            <div className='author'>
                <div className='left'>
                    <img src={img1} className='img'></img>
                    <span className='name'>哈哈</span>
                </div>
                <div className='right'>50</div>
            </div>
        </div>
    );
};
export default Card;
