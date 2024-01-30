import React from 'react'
import './index.scss'
import classnames from 'classnames';
import Card from '../card'

const WaterFall = (props: any) => {
    return (
        <div className={classnames('component-waterfall')}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}
export default WaterFall