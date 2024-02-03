import IMAGES from '../constants/imgs';
const Mock = require('mockjs');
const Random = Mock.Random;

const data = () => {
    let arr = [] as any;
    for (let i = 0; i < Random.integer(5, 20); i++) {
        arr[i] = {
            type: i == 0 ? 'main' : Random.pick(['sub', 'to']),
            userIcon: Random.image('20x20', Random.color(), Random.color(), 'png', Random.word(5)),
            userName: Random.cword(Random.integer(2, 8)),
            toName: Random.cword(Random.integer(2, 8)),
            content: Random.ctitle(Random.integer(10, 30)),
            time: Random.datetime('yyyy-MM-dd'),
            addr: Random.province(),
            like: Random.integer(10, 50),
            comment: Random.integer(20, 30),
        };
    }
    return arr;
};
const data2 = () => {
    let arr = [] as any;
    for (let i = 0; i < Random.integer(1, 10); i++) {
        arr[i] = {
            list: data(),
        };
    }
    return arr;
};

Mock.mock('http://dev.com/test/comment-list', 'get', {
    data: { list: data2(), length: 122 },
    code: 200,
});

console.log('mock1');
