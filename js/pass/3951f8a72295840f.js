var obj = function (a, b) {
  return a + b;
};
obj[0] = 11;
obj[1] = 9;
var accessed = false;
function callbackfn(prevVal, curVal, idx, o) {
  accessed = true;
  return o instanceof Function;
}