var called = 0;
function callbackfn(val, idx, obj) {
  called++;
  return val === 11;
}