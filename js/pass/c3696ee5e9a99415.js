var accessed = false;
var arg;
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === arg;
}
(function fun() {
  arg = arguments;
})(1, 2, 3);
var newArr = [11].filter(callbackfn, arg);