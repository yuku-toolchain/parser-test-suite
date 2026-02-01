var expectedThis = (function () {
  return this;
})();
var resolveCount = 0;
var thisValue, args;
var P = function (executor) {
  return new Promise(function () {
    executor(function () {
      resolveCount += 1;
    }, function () {
      thisValue = this;
      args = arguments;
    });
  });
};
Promise.reject.call(P, 24601);