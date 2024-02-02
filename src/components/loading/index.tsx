import React, { useEffect, useState } from 'react';
import './index.scss';
import { LoadingOutlined } from '@ant-design/icons';

const Loading = ({ loading }) => {
    return loading ? (
        <div className='component-loading'>
            <LoadingOutlined />
        </div>
    ) : null;
};
export default Loading;
