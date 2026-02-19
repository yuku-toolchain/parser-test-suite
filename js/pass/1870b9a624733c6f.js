var objString = new String();
var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objString;
}
var obj = {
  0: 11,
  length: 1
};