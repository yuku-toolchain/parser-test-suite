var accessed = false;
var objBoolean = new Boolean();
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objBoolean;
}
var obj = {
  0: 11,
  length: 1
};