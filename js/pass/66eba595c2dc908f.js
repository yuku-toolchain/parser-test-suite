var objBoolean = new Boolean();
var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objBoolean;
}
var obj = {
  0: 11,
  length: 1
};