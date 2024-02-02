import React, { useState } from 'react';
import './index.scss';
import classnames from 'classnames';
import { Button, Modal, Input } from 'antd';
import { HeartOutlined, HeartTwoTone, StarOutlined, MessageOutlined } from '@ant-design/icons';
import Image from '../image';
import Comment from './comment';

interface IProps {
    img: string;
    title: string;
    owner: string;
    name: string;
    like: number;
    time: any;
}

const Card = (props: IProps) => {
    const { img, title, owner, name, like, time } = props;
    const [visible, setVisible] = useState(false);
    let h = Math.random() * 100 + 200 + 'px';
    const handleDialog = () => {
        setVisible(true);
    };
    const handleDialogClose = () => {
        setVisible(false);
    };
    return (
        <div className={classnames('component-card')}>
            <Image onClick={handleDialog} className='img' src={img}></Image>
            <div onClick={handleDialog} className='title'>
                {title}
            </div>
            <div className='author'>
                <div className='left'>
                    <img src={owner} className='img'></img>
                    <span className='name'>{name}</span>
                </div>
                <div className='right'>
                    <HeartOutlined />
                    <span>{like}</span>
                </div>
            </div>
            <Modal className='card-modal' width={800} open={visible} onCancel={handleDialogClose}>
                <img className='img' src={img}></img>
                <div className='right-block'>
                    <div className='owner'>
                        <div className='left'>
                            <img src={owner} className='img'></img>
                            <span className='name'>{name}</span>
                        </div>
                        <Button>关注</Button>
                    </div>
                    <div className='content'>
                        <div className='title'>{title}</div>
                        <div className='time'>{time}</div>
                    </div>
                    <div className='footer'>
                        <Comment like={like} />
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default Card;
