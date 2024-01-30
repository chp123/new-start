import React from 'react'
import './index.scss'
import classnames from 'classnames';

const Card = () => {
    return (
        <div className={classnames('component-card')}>
            <img className='img' src=''></img>
            <div className='title'>小红书小卡片</div>
            <div className='author'>
                <div className='left'>
                    <img src=''></img>
                    <span>燕子</span>
                </div>
                <div className='right'>50</div>
            </div>
        </div>
    )
}
export default Card