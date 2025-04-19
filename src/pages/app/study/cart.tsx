import React, { useReducer } from 'react';
const Cart = () => {
    const initState = [
        { name: '商品名称1', id: 1, count: 1, price: 11, isEdit: 'false' },
        { name: '商品名称2', id: 2, count: 2, price: 12, isEdit: 'false' },
        { name: '商品名称3', id: 3, count: 3, price: 13, isEdit: 'false' },
    ];
    type State = typeof initState;
    const initFn = () => {
        return initState;
    };
    const reducer = (state: State, action: { type: 'add' | 'sub' | 'del'; id: number }) => {
        console.log('reducer', state, action);//为啥会调两遍
        let item = state.find((item) => item.id == action.id);
        switch (action.type) {
            case 'add':
                item.count++;
                return [...state];
            case 'sub':
                item.count--;
                return [...state];
            case 'del':
                state = state.filter((item) => item.id != action.id);
                return [...state];
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initState, initFn);
    return (
        <div>
            <h1>购物车</h1>
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>商品名称</th>
                        <th>商品单价</th>
                        <th>商品数量</th>
                        <th>商品总价</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((item) => {
                        return (
                            <tr key={item.id}>
                                <th>{item.name}</th>
                                <th>{item.price}</th>
                                <th>
                                    <button onClick={() => dispatch({ type: 'add', id: item.id })}>
                                        +
                                    </button>
                                    {item.count}
                                    <button onClick={() => dispatch({ type: 'sub', id: item.id })}>
                                        -
                                    </button>
                                </th>
                                <th>{item.count * item.price}</th>
                                <th>
                                    <button>编辑</button>
                                    <button onClick={() => dispatch({ type: 'del', id: item.id })}>
                                        删除
                                    </button>
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>总价</th>
                        <th colSpan={4}>{state.reduce((a, b) => a + b.count * b.price, 0)}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
export default Cart;
