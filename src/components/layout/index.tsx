import React from 'react'
import './index.scss'
import Head from '../head'
import Navbar from '../navbar'
import { HashRouter as Router } from 'react-router-dom'
import RouteConfig from '@src/router'

const Layout = () => {
    return (
        <div className='component-layout'>
            <Head></Head>
            <div className='content'>
                <Router>
                    <Navbar></Navbar>
                    <div className='container'>{RouteConfig}</div>
                </Router>
            </div>
        </div>
    )
}
export default Layout