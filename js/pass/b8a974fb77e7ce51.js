var accessed = false;
var objDate = new Date(0);
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objDate;
}
var obj = {
  0: 11,
  length: 1
};