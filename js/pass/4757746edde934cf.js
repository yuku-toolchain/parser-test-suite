var objRegExp = new RegExp();
var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objRegExp;
}
var obj = {
  0: 11,
  length: 1
};