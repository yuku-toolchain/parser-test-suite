var called = 0;
function callbackfn(val, idx, obj) {
  called++;
  return val > 10 && obj[idx] === val;
}