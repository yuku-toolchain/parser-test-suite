var accessed = false;
var arg;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === arg;
}
var obj = {
  0: 11,
  length: 1
};
(function fun() {
  arg = arguments;
})(10, 11, 12, 13);