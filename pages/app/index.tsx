import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../../src/pages/app/index';
const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = '首页';
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
