const counterReducer = (state = 0, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            state++
            return state
        case 'DECREMENT':
            state--
            return state
        default:
            return state;
    }
}
export default counterReducer