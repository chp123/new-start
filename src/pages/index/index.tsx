import React from 'react'
import './index.scss'
import Theme from '../../components/theme'

const Index = () => {
    return (
        <div>
            <h1 className='index'>这里是首页</h1>
            <a href='./app.html'>去app</a>
            <a href='./single.html#/app'>去单页面</a>
            <Theme></Theme>
        </div>
    )
}
export default Index