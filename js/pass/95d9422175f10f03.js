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
var checkPoint = "";
var checkPoint = "";
var checkPoint = "";
var checkPoint = "";
var checkPoint = "";