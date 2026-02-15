var rejectElementFunction;
var thenable = {
  then: function (_, reject) {
    rejectElementFunction = reject;
  }
};
function NotPromise(executor) {
  executor(function () {}, function () {});
}
NotPromise.resolve = function (v) {
  return v;
};
Promise.allSettled.call(NotPromise, [thenable]);
var propNames = Object.getOwnPropertyNames(rejectElementFunction);
var lengthIndex = propNames.indexOf("length");
var nameIndex = propNames.indexOf("name");