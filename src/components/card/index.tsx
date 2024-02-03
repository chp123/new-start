import React, { useState } from 'react';
import './index.scss';
import classnames from 'classnames';
import { Button, Modal } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import Image from '../image';
import Comment from './comment';
import CommentList from './comment-list';
import { getRequest, IReponse } from '@src/request/index';

interface IProps {
    img: string;
    title: string;
    owner: string;
    name: string;
    like: number;
    time: any;
    [key: string]: any;
}

const Card = (props: IProps) => {
    const { img, title, owner, name, like, time, addr, comment, collect } = props;
    const [visible, setVisible] = useState(false);
    const [commentList, setCommentList] = useState([]);
    let h = Math.random() * 100 + 200 + 'px';
    const handleDialog = () => {
        getComment();
        setVisible(true);
    };
    const handleDialogClose = () => {
        setVisible(false);
    };
    const getComment = () => {
        getRequest('/test/comment-list').then((res: IReponse) => {
            setCommentList(res.data.list);
            console.log(res);
        });
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
                    <div className='scroll-block'>
                        <div className='content'>
                            <div className='title'>{title}</div>
                            <div className='time'>{`${time} ${addr}`}</div>
                        </div>
                        <div className='list'>
                            <CommentList comment={comment} data={commentList}/>
                        </div>
                    </div>

                    <div className='footer'>
                        <Comment like={like} comment={comment} collect={collect} />
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default Card;
