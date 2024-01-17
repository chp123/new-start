import counterReducer from "./counter";
import themeReducer from "./theme";
import { combineReducers } from 'redux';

const createReducer = () => {
    const reducers = {
        count: counterReducer,
        theme: themeReducer
    };
    return combineReducers(reducers);
}
export default createReducer
