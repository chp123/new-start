import counterReducer from './counter';
import themeReducer from './theme';
import userReducer from './user';
import { combineReducers } from 'redux';

const createReducer = () => {
    const reducers = {
        count: counterReducer,
        theme: themeReducer,
        user: userReducer,
    };
    return combineReducers(reducers);
};
export default createReducer;
