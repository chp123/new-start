const themeReducer = (state = 'LIGHT', action: any) => {
    switch (action.type) {
        case 'LIGHT':
            state = 'LIGHT'
            return state;
        case 'DARK':
            state = 'DARK'
            return state;
        default:
            return state;
    }
}

export default themeReducer