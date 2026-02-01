var expectedThisValue = (function () {
  return this;
})();
var callCount = 0;
var object = {};
var thisValue, args;
Promise.resolve.call(function (executor) {
  function resolve(v) {
    callCount += 1;
    thisValue = this;
    args = arguments;
  }
  executor(resolve, Test262Error.thrower);
}, object);