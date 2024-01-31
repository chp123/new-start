const themeReducer = (state = 'LIGHT', action: any) => {
    switch (action.type) {
        case 'LIGHT':
            state = 'LIGHT';
            return state;
        case 'DARK':
            state = 'DARK';
            return state;
        case 'PINK':
            state = 'PINK';
            return state;
        default:
            state = 'LIGHT';
            return state;
    }
};

export default themeReducer;
