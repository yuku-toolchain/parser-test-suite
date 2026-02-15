var arg;
function callbackfn(val, idx, obj) {
  return this === arg;
}
(function fun() {
  arg = arguments;
})(1, 2, 3);