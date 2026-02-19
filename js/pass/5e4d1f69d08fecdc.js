class MyError extends Error {}
var error1 = new MyError();
var error2 = new MyError();
var error3 = new MyError();
var stack = new DisposableStack();
stack.defer(function () {
  throw error1;
});
stack.defer(function () {
  throw error2;
});
stack.defer(function () {
  throw error3;
});
try {
  stack.dispose();
} catch (e) {}