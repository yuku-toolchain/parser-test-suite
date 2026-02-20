var called = 0;
function callbackfn() {
  called++;
}
[11, 12].forEach(callbackfn);