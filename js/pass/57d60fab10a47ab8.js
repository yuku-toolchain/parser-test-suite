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
let predicateCalls = 0;
let result = Iterator.prototype.find.call(iter, function (v) {
  ++predicateCalls;
  return v === 0;
});