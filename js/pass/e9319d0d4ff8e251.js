var thisArg = {
  threshold: 10
};
function callbackfn(val, idx, obj) {
  return this === thisArg;
}
var obj = {
  0: 11,
  length: 2
};