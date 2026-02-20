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
for (var returnMethod of [0, 0n, true, "string", {}, Symbol()]) {
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
  Promise.allSettled.call(BadPromise, iterator);
}