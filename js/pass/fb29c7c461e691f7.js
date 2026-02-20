var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return prevVal === "hello_";
}
var obj = {
  0: 11,
  length: 1
};