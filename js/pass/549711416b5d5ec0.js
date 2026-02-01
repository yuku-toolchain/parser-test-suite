var called = 0;
function callbackfn(val) {
  called++;
  return val > 10;
}