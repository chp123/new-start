import IMAGES from '../constants/imgs';
const Mock = require('mockjs');

Mock.mock('http://dev.com/login', 'get', {
    data: {
        id: 100000,
        name: '甄嬛',
        img: IMAGES.USER,
    },
    code: 200,
});

console.log('mock1');
