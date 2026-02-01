var called = 0;
function callbackfn(val, idx) {
  called++;
  return val > 10 && arguments[2][idx] === val;
}