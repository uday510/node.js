const assert = require('node:assert');

console.clear();

const obj1 = {
    a: {
        b: 1
    },
};

const obj2 = {
    a: {
        b: 2
    },
};

const obj3 = {
    a: {
        b: 1
    },
};

const obj4 = {__proto: obj1};

const obj5 = Object.create(obj1);

assert.deepEqual(obj1, obj1);

assert.deepEqual(obj1, obj2);

assert.deepEqual(obj1, obj3);

assert.deepEqual(obj1, obj4);

assert.deepEqual(obj1, obj5);
