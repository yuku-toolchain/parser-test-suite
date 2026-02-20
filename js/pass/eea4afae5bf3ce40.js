var objFunction = function () {};
var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objFunction;
}
var obj = {
  0: 11,
  length: 1
};