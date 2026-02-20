var accessed2 = false;
function callbackfn2(prevVal, curVal, idx, obj) {
  accessed2 = true;
  return 2;
}
var obj2 = {
  0: 9,
  length: "-Infinity"
};