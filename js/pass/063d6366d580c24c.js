let originalCallCount = 0;
let newCallCount = 0;
let P = function (executor) {
  executor(function () {}, function () {});
};
P.resolve = function () {
  return newThenable;
};
let originalThenable = {
  then() {
    originalCallCount += 1;
  }
};
let newThenable = {
  then() {
    newCallCount += 1;
  }
};
Promise.any.call(P, [originalThenable]);