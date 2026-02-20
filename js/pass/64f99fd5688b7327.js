var rejectElementFunction;
var thenable = {
  then(_, reject) {
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