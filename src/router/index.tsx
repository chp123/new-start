import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '@src/pages/app/index';
import Index from '@src/pages/index';
import My from '@src/pages/my';
import Documents from '@src/pages/documents';

const routers = [
    {
        path: '/',
        element: <Index />,
        title: '首页',
    },
    {
        path: '*',
        element: <Index />,
        title: '首页',
    },
    {
        path: 'index',
        element: <Index />,
        title: '首页',
    },
    {
        path: 'my',
        element: <My />,
        title: '我的',
    },
    {
        path: 'app',
        element: <App />,
        title: 'app',
    },
    {
        path: 'documents',
        element: <Documents />,
        title: '文档',
    },
];

const PageTitle = (route: any) => {
    const { title, element } = route;
    document.title = title;
    return element;
};
const RouteConfig = (
    <Routes>
        {routers.map((item) => (
            <Route {...item} element={<PageTitle {...item} />} />
        ))}
    </Routes>
);
export default RouteConfig;
