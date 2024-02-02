import React, { useEffect } from 'react';
import './index.scss';
import Head from '../head';
import Navbar from '../navbar';
import { HashRouter as Router } from 'react-router-dom';
import RouteConfig from '@src/router';
import { Provider } from 'react-redux';
import store from '@src/store';
import { login } from '@src/logic';
import '@src/mock';

const Layout = () => {
    useEffect(() => {
        login();
    }, []);

    return (
        <Provider store={store}>
            <div className='component-layout'>
                <Head></Head>
                <div className='content'>
                    <Router>
                        <Navbar></Navbar>
                        <div className='container'>{RouteConfig}</div>
                    </Router>
                </div>
            </div>
        </Provider>
    );
};
export default Layout;
