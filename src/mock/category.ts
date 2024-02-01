const Mock = require('mockjs');
Mock.mock('http://dev.com/test/category', 'get', {
    data: [
        { name: '推荐', catNo: 1 },
        { name: '附近', catNo: 2 },
        { name: '游戏', catNo: 3 },
    ],
    code: 200,
});

console.log('mock2');
