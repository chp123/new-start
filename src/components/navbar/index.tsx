import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'
import { connect } from 'react-redux'

const Navbar = (props: any) => {
    const { theme } = props
    return (
        <div className={classnames('component-navbar', { 'light': theme == 'LIGHT' }, { 'dark': theme == 'DARK' })} >
            <NavLink to={'index'}>首页</NavLink>
            <NavLink to={'app'}>app</NavLink>
        </div>
    )
}
const mapStateToProps = (state: any) => ({
    theme: state.theme,
});
export default connect(mapStateToProps)(Navbar)