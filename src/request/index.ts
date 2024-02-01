import axios, { AxiosRequestConfig } from 'axios';

export interface IReponse {
    data: any;
    code: number;
}

const baseURL = process.env.NODE_ENV == 'prod' ? 'http://prod.com' : 'http://dev.com';
const baseRequest = (method: string, url: string, params?: any, options?: AxiosRequestConfig) => {
    const config = {
        url,
        method,
        params,
        baseURL,
        timeout: 2000,
        withCredentials: true,
        ...options,
    };
    return new Promise((resolve, reject) => {
        axios(config)
            .then((res) => {
                const { data } = res;
                resolve(data);
            })
            .catch((e) => {
                reject(e);
            });
    });
};
// transformRequest
const beforequest = () => {};
// transformResponse
const afterquest = () => {};
export const getRequest = (url: string, params?: any) => {
    return baseRequest('get', url, params);
};
export const postRequest = (url: string, params?: any) => {
    return baseRequest('post', url, params);
};
