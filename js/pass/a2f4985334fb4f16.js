var iterable = {
  [Symbol.iterator]: function () {
    var count = 0;
    return {
      next: function () {
        if (count === 0) {
          ++count;
          return {
            done: false,
            value: {
              '0': 'first key',
              '1': 'first value',
              get [Symbol.iterator]() {}
            }
          };
        } else if (count === 1) {
          ++count;
          Array.prototype[Symbol.iterator] = function () {};
          return {
            done: false,
            value: ['second key', 'second value']
          };
        } else {
          return {
            done: true
          };
        }
      }
    };
  }
};
var result = Object.fromEntries(iterable);