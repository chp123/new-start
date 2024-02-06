import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { BarsOutlined } from '@ant-design/icons';
import { Popover, Button, Radio } from 'antd';
import { login, logout } from '@src/logic';
import store from '@src/store';

const Navbar = (props: any) => {
    const { theme, user } = props;
    return (
        <div className={classnames('component-navbar', `theme-${theme.toString().toLowerCase()}`)}>
            <div className=''>
                <NavLink to={'index'}>首页</NavLink>
                <NavLink to={'app'}>app</NavLink>
                <NavLink to={'documents'}>文档</NavLink>
            </div>
            <Setting user={user} theme={theme} />
        </div>
    );
};
const mapStateToProps = (state: any) => ({
    theme: state.theme,
    user: state.user,
});
export default connect(mapStateToProps)(Navbar);

const Setting = ({ user, theme }) => {
    const handleLogin = () => {
        if (user.id) {
            logout();
        } else {
            login();
        }
    };
    const content = (
        <div className='component-setting'>
            <Radio.Group
                options={[
                    { label: '浅色', value: 'LIGHT' },
                    { label: '深色', value: 'DARK' },
                    { label: '粉色', value: 'PINK' },
                ]}
                onChange={({ target: { value } }) => {
                    store.dispatch({ type: value });
                }}
                value={theme}
                optionType='button'
            />
            <Button type='text' onClick={handleLogin}>
                {user.id ? '退出登录' : '登录'}
            </Button>
        </div>
    );
    return (
        <Popover trigger='click' placement='top' title content={content}>
            <div className='setting'>
                <BarsOutlined />
                设置
            </div>
        </Popover>
    );
};
