var checkPoint = "";
Promise.resolve.call(function (executor) {
  checkPoint += "a";
  executor();
  checkPoint += "b";
  executor(function () {}, function () {});
  checkPoint += "c";
}, {});
var checkPoint = "";
Promise.resolve.call(function (executor) {
  checkPoint += "a";
  executor(undefined, undefined);
  checkPoint += "b";
  executor(function () {}, function () {});
  checkPoint += "c";
}, {});
var checkPoint = "";
var checkPoint = "";
var checkPoint = "";