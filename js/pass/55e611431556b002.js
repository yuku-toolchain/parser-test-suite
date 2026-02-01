var accessed = false;
var objString = new String();
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objString;
}
var obj = {
  0: 11,
  length: 1
};