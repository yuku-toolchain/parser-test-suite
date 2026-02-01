var called = 0;
function callbackfn() {
  called++;
  return arguments[2][arguments[1]] === arguments[0];
}