function callbackfn(prevVal, curVal, idx, obj) {
  return obj instanceof Function;
}
var obj = function (a, b) {
  return a + b;
};
obj[0] = 11;
obj[1] = 9;