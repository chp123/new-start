import React from 'react'
import { connect } from 'react-redux'

const Counter = (props: any) => {
    const { count, onIncrement, onDecrement } = props;
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
}
const mapStateToProps = (state: any) => ({
    count: state,
});

const mapDispatchToProps = (dispatch: any) => ({
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);