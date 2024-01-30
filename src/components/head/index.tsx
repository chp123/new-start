import React from 'react'
import './index.scss'
import { connect } from 'react-redux'
import classnames from 'classnames';
import Theme from '../theme'

const Head = (props: any) => {
    const { theme } = props
    return (
        <div className={classnames('component-head', { 'light': theme == 'LIGHT' }, { 'dark': theme == 'DARK' })}>
            <div className='logo'>logo</div>
            <div className='right'><Theme></Theme><div className='user'>user</div></div>
        </div>
    )
}
const mapStateToProps = (state: any) => ({
    theme: state.theme,
});
export default connect(mapStateToProps)(Head)