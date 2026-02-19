let iter = {
  get next() {
    let count = 3;
    return function () {
      --count;
      return count >= 0 ? {
        done: false,
        value: count
      } : {
        done: true,
        value: undefined
      };
    };
  }
};
let takeIter = Iterator.prototype.take.call(iter, 1);
let {done, value} = takeIter.next();