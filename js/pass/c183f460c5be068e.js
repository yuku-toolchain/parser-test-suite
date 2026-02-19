var result = false;
var arg;
function callbackfn(val, idx, obj) {
  result = this === arg;
}
(function fun() {
  arg = arguments;
})(1, 2, 3);
[11].forEach(callbackfn, arg);