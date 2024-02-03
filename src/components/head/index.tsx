import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Theme from '../theme';
import IMAGES from '../../constants/imgs';
import store from '@src/store';
import { login, logout } from '@src/logic';

const Head = (props: any) => {
    const { theme, user } = props;
    const handleLogin = () => {
        if (user.id) {
            logout();
        } else {
            login();
        }
    };
    const handleMy = () => {
        location.href = '/single.html#/my';
    };
    return (
        <div className={classnames('component-head', `theme-${theme.toString().toLowerCase()}`)}>
            <div
                className='left'
                onClick={() => {
                    location.href = './single.html#/index';
                }}>
                <img src={IMAGES.LOGO} className='logo'></img>
                <span>狗狗托儿所</span>
            </div>

            <div className='right'>
                <Theme></Theme>
                {user.img && <img src={user.img} className='user' onClick={handleMy}></img>}
                <span onClick={handleLogin}>{user.id ? '登出' : '登录'}</span>
            </div>
        </div>
    );
};
const mapStateToProps = (state: any) => ({
    theme: state.theme,
    user: state.user,
});
export default connect(mapStateToProps)(Head);
