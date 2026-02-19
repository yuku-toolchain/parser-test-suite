function callbackfn(val, idx, obj) {
  if (idx === 0) {
    obj[idx + 1] = 11;
  }
  return val > 10;
}
var obj = {
  0: 9,
  1: 8,
  length: 2
};