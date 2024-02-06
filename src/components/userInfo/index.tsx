import React, { useEffect, useState } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import Image from '../image';

const UserInfo = (props) => {
    const { user } = props;
    return (
        <div className='component-userinfo'>
            <Image className='logo' src={user.img}></Image>
            <div className='info'>
                <div className='name'>{user.name}</div>
                <div className='account'>{`狗狗账号：${user.id} ｜ IP属地：${user.addr}`}</div>
                <div className='data'>
                    <span>
                        <span className='num'>{user.attention}</span>关注
                    </span>
                    <span>
                        <span className='num'>{user.fans}</span>粉丝
                    </span>
                    <span>
                        <span className='num'>{user.like}</span>获赞
                    </span>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state: any) => ({
    user: state.user,
});
export default connect(mapStateToProps)(UserInfo);
