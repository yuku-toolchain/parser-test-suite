var originalCallCount = 0;
var newCallCount = 0;
var P = function (executor) {
  executor(function () {}, function () {});
};
P.resolve = function () {
  return newThenable;
};
var originalThenable = {
  then: function () {
    originalCallCount += 1;
  }
};
var newThenable = {
  then: function () {
    newCallCount += 1;
  }
};
Promise.all.call(P, [originalThenable]);