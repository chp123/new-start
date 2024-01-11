import React from 'react'
import './App.scss'
interface IProps {
    a: number,
    b: string
}

const App = (x: IProps): any => {
    return (
        <div>
            <h1 className='name'>Hello World! {x.a}-{x.b}</h1>
        </div>
    )
}
export default App