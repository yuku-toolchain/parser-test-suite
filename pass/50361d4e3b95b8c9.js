var executorFunction;
function NotPromise(executor) {
  executorFunction = executor;
  executor(function () {}, function () {});
}
Promise.resolve.call(NotPromise);