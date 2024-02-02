const userReducer = (state = {}, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            state = action.payload;
            return state;
        case 'LOGOUT':
            state = {};
            return state;
        default:
            return state;
    }
};
export default userReducer;
