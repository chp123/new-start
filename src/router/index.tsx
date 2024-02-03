import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '@src/pages/app/index';
import Index from '@src/pages/index';
import My from '@src/pages/my';

const RouteConfig = (
    <Routes>
        <Route path='/' element={<Index />} />
        <Route path='index' element={<Index />} />
        <Route path='my' element={<My />} />
        <Route path='app' element={<App a={1} b='2' />} />
        <Route path='*' element={<Index />} />
    </Routes>
);
export default RouteConfig;
