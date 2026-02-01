var originalCallCount = 0;
var newCallCount = 0;
var P = function (executor) {
  executor(function () {}, function () {});
};
P.resolve = function () {
  return newThenable;
};
var originalThenable = {
  then() {
    originalCallCount += 1;
  }
};
var newThenable = {
  then() {
    newCallCount += 1;
  }
};
Promise.allSettled.call(P, [originalThenable]);