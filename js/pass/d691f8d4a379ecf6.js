var called = 0;
function callbackfn(val, idx, obj) {
  called++;
  if (called === 1) {}
  return true;
}
var obj = {
  0: 11,
  4: 10,
  10: 8,
  length: 20
};