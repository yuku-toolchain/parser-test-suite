var accessed = false;
var objFunction = function () {};
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objFunction;
}
var obj = {
  0: 11,
  length: 1
};