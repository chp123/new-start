import React, { useState } from 'react';
import './index.scss';
import classnames from 'classnames';
import { HeartOutlined, MessageOutlined } from '@ant-design/icons';
import IMAGES from '@src/constants/imgs';

interface IProps {
    comment: number;
    data: any;
}

const CommentList = (props: IProps) => {
    const { comment, data } = props;
    // const data = [{ list: list }, { list: list }, { list: list }];
    return (
        <div className={classnames('component-comment-list')}>
            <div className='summary'>共{comment}条评论</div>
            {data.map((item, index) => {
                return <Comments key={index} list={item.list} />;
            })}
            <div className='end'>-THE END-</div>
        </div>
    );
};
export default CommentList;

const CommentItem = (props: any) => {
    const { type, userIcon, userName, toName, content, time, addr, like, comment } = props;
    return (
        <div className={classnames('dialog-item', `item-${type}`)}>
            <img className='user-icon' src={userIcon} />
            <div className='comment-content'>
                <div className='name'>{userName}</div>
                <div className='comment'>
                    {type == 'to' && (
                        <span>
                            回复 <span className='to'>{toName}</span>：
                        </span>
                    )}
                    {content}
                </div>
                <div className='time'>{`${time}${addr}`}</div>
                <div className='btns'>
                    <div className='icon'>
                        <HeartOutlined />
                        <span>{like}</span>
                    </div>
                    <div className='icon'>
                        <MessageOutlined />
                        <span>{comment}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
const Comments = ({ list }) => {
    return (
        <div className='dialogue'>
            {list.map((item, index) => {
                return <CommentItem key={index} {...item} />;
            })}
            <div className='more'>展开更多回复</div>
        </div>
    );
};
