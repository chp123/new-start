import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { Dropdown, Button } from 'antd';
import type { MenuProps } from 'antd';
import classnames from 'classnames';

const Theme = (props: any) => {
    const { theme, onLight, onDark, onPink } = props;
    const items: MenuProps['items'] = [
        { key: 'light', label: <div onClick={onLight}>浅色</div> },
        { key: 'dark', label: <div onClick={onDark}>深色</div> },
        { key: 'pink', label: <div onClick={onPink}>粉色</div> },
    ];

    return (
        <Dropdown
            className={classnames('component-theme', `theme-${theme.toString().toLowerCase()}`)}
            menu={{ items }}
            placement='bottom'>
            <Button type='text'>主题色</Button>
        </Dropdown>
    );
};
const mapStateToProps = (state: any) => ({
    theme: state.theme,
});

const mapDispatchToProps = (dispatch: any) => ({
    onLight: () => dispatch({ type: 'LIGHT' }),
    onDark: () => dispatch({ type: 'DARK' }),
    onPink: () => dispatch({ type: 'PINK' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
