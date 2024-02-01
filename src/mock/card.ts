import IMAGES from '../constants/imgs';
const Mock = require('mockjs');
const Random = Mock.Random;

const data = () => {
    let arr = [] as any;
    for (let i = 0; i < Random.integer(20, 30); i++) {
        arr[i] = {
            img: Random.image(`200x100}`, Random.color(), Random.color(), 'png', Random.word(5)),
            title: Random.ctitle(Random.integer(10, 30)),
            name: Random.cword(Random.integer(2, 8)),
            owner: Random.image('20x20', Random.color(), Random.color(), 'png', Random.word(5)),
            like: Random.integer(60, 100),
            time: Random.datetime('yyyy-MM-dd'),
        };
    }
    return arr;
};

Mock.mock('http://dev.com/test/card', 'get', {
    data: data(),
    code: 200,
});

console.log('mock1');
