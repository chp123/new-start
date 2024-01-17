import React from 'react'
import './index.scss'
import Counter from '@src/components/counter'
interface IProps {
    a: number,
    b: string
}

const App = (x: IProps): any => {
    return (
        <div>
            <h1 className='name'>Hello World! 这里是app{x.a}-{x.b}</h1>
            <a href='./index.html'>去首页</a>
            <a href='./single.html#/index'>去单页面</a>
            <Counter></Counter>
        </div>
    )
}
export default App