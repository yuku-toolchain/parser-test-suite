function resolve() {}
var rejectCallCount = 0;
function reject(e) {
  rejectCallCount += 1;
}
class BadPromise {
  constructor(executor) {
    executor(resolve, reject);
  }
  static resolve() {
    throw "bad promise resolve";
  }
}
for (var returnMethod of [null, undefined]) {
  var iterator = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      return {
        done: false
      };
    },
    return: returnMethod
  };
  rejectCallCount = 0;
  Promise.any.call(BadPromise, iterator);
}