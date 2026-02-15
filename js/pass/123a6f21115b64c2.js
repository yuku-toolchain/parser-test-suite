var count = 0;
var item = ['foo', 'bar'];
Object.defineProperty(item, 1, {
  get: function () {}
});
var iterable = {};
iterable[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        value: item,
        done: false
      };
    },
    return: function () {
      count++;
    }
  };
};