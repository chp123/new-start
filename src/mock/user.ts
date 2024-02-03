import IMAGES from '../constants/imgs';
const Mock = require('mockjs');

Mock.mock('http://dev.com/login', 'get', {
    data: {
        id: 100000,
        name: '甄嬛',
        img: IMAGES.USER,
        addr: '湖北',
        attention: 1,
        fans: 10,
        like: 100,
    },
    code: 200,
});

console.log('mock1');
