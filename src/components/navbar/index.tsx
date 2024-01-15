import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='component-navbar'>
            <NavLink to={'index'}>首页</NavLink>
            <NavLink to={'app'}>app</NavLink>
        </div>
    )
}
export default Navbar