import { getRequest, IReponse } from '@src/request/index';
import store from '@src/store';
export const login = () => {
    getRequest('/login').then((res: IReponse) => {
        console.log(res);
        store.dispatch({ type: 'LOGIN', payload: res.data });
    });
};

export const logout = () => {
    store.dispatch({ type: 'LOGOUT' });
};
