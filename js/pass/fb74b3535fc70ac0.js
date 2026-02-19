var count = 0;
var nextItem;
var iterable = {};
iterable[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        value: nextItem,
        done: false
      };
    },
    return: function () {
      count += 1;
    }
  };
};
nextItem = 1;
nextItem = true;
nextItem = '';
nextItem = null;
nextItem = undefined;
nextItem = Symbol.for('a');