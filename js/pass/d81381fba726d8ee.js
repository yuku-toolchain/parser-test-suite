var accessed = false;
var objNumber = new Number();
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === objNumber;
}
var obj = {
  0: 11,
  length: 1
};