var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return typeof prevVal === "undefined";
}
var obj = {
  0: 11,
  length: 1
};