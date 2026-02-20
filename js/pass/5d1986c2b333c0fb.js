var called = 0;
function callbackfn(val, idx, obj) {
  called++;
  return val === 12;
}
Array.prototype[0] = 11;
Array.prototype[1] = 11;