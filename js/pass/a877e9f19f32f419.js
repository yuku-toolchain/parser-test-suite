var obj = {
  0: 11,
  1: 12,
  length: 2
};
function callbackfn(val, idx, o) {
  return obj === o;
}