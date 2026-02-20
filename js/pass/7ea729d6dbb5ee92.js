var callCount = 0;
var resolve, reject, argCount;
new Promise(function (a, b) {
  resolve = a;
  reject = b;
  argCount = arguments.length;
});