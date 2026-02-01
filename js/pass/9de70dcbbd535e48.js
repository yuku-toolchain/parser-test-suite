var constructorFunction;
var promise = new (class extends Promise {
  constructor(executor) {
    if (constructorFunction) {
      constructorFunction(executor);
      return {};
    }
    return super(executor);
  }
})(function () {});
var checkPoint = "";
constructorFunction = function (executor) {
  checkPoint += "a";
  executor();
  checkPoint += "b";
  executor(function () {}, function () {});
  checkPoint += "c";
};
promise.then();
var checkPoint = "";
constructorFunction = function (executor) {
  checkPoint += "a";
  executor(undefined, undefined);
  checkPoint += "b";
  executor(function () {}, function () {});
  checkPoint += "c";
};
promise.then();
var checkPoint = "";
var checkPoint = "";
var checkPoint = "";