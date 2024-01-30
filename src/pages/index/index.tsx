import React from 'react'
import './index.scss'
import WaterFall from '@src/components/waterfall'

const Index = () => {
    return (
        <div>
            <h1 className='index'>这里是首页</h1>
            <a href='./app.html'>去app</a>
            <a href='./single.html#/app'>去单页面</a>
            <WaterFall />
        </div>
    )
}
export default Index