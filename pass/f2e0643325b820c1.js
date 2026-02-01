var P = function (executor) {
  return new Promise(function () {
    executor(function () {}, function () {});
  });
};