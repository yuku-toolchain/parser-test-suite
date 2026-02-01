var resolveElementFunction;
var thenable = {
  then: function (fulfill) {
    resolveElementFunction = fulfill;
  }
};
function NotPromise(executor) {
  executor(function () {}, function () {});
}
NotPromise.resolve = function (v) {
  return v;
};
Promise.all.call(NotPromise, [thenable]);
var propNames = Object.getOwnPropertyNames(resolveElementFunction);
var lengthIndex = propNames.indexOf("length");
var nameIndex = propNames.indexOf("name");