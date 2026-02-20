var objArray = new Array(10);
var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objArray;
}
var obj = {
  0: 11,
  length: 1
};