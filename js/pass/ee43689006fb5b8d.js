var executorFunction;
function NotPromise(executor) {
  executorFunction = executor;
  executor(function () {}, function () {});
}
Promise.resolve.call(NotPromise);
var propNames = Object.getOwnPropertyNames(executorFunction);
var lengthIndex = propNames.indexOf("length");
var nameIndex = propNames.indexOf("name");