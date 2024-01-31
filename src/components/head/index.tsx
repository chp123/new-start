import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Theme from '../theme';
import IMAGES from '../../constants/imgs';

const Head = (props: any) => {
    const { theme } = props;
    return (
        <div className={classnames('component-head', `theme-${theme.toString().toLowerCase()}`)}>
            <div className='left' onClick={()=>{
                location.href= './single.html#/index'
            }}>
                <img src={IMAGES.LOGO} className='logo'></img>
                <span>狗狗托儿所</span>
            </div>

            <div className='right'>
                <Theme></Theme>
                <img src={IMAGES.USER} className='user'></img>
            </div>
        </div>
    );
};
const mapStateToProps = (state: any) => ({
    theme: state.theme,
});
export default connect(mapStateToProps)(Head);
