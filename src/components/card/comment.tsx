import React, { useState } from 'react';
import './index.scss';
import classnames from 'classnames';
import { Button, Input } from 'antd';
import { HeartOutlined, StarOutlined, MessageOutlined } from '@ant-design/icons';

interface IProps {
    like: number;
}

const Comment = (props: IProps) => {
    const { like } = props;
    const [visible, setVisible] = useState(false);
    const handleVisible = () => {
        setVisible(true);
    };
    const handleClose = () => {
        setVisible(false);
    };
    return (
        <div className={classnames('component-comment')}>
            {visible ? (
                <div className='comment'>
                    <Input />
                    <div className='btn'>
                        <Button onClick={handleClose}>取消</Button>
                        <Button type='primary'>发送</Button>
                    </div>
                </div>
            ) : (
                <div className='normal'>
                    <div className='left' onClick={handleVisible}>
                        说点什么...
                    </div>
                    <div className='right'>
                        <div className='icon'>
                            <HeartOutlined />
                            <span>{like}</span>
                        </div>
                        <div className='icon'>
                            <StarOutlined />
                            <span>{like}</span>
                        </div>
                        <div className='icon' onClick={handleVisible}>
                            <MessageOutlined />
                            <span>{like}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Comment;
