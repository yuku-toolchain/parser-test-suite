class MyError extends Error {}
var stack = new DisposableStack();
stack.defer(function () {
  throw new MyError();
});
stack.defer(function () {});