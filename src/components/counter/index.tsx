import React from 'react'
import { connect } from 'react-redux'

const Counter = (props: any) => {
    const { count, onIncrement, onDecrement } = props;
    return (
        <div>
            <h1>redux Counter: {count}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
}
const mapStateToProps = (state: any) => ({
    count: state.count,
});

const mapDispatchToProps = (dispatch: any) => ({
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// connect 函数接受两个参数：mapStateToProps 和 mapDispatchToProps。mapStateToProps 用于将 store 中的 state 映射到组件的 props 中，mapDispatchToProps 用于将 action creator 映射到组件的 props 中。当 Redux store 中的 state 或者 dispatch 发生变化时，connect 函数可以自动重新获取最新的 state 并将其传递给组件。