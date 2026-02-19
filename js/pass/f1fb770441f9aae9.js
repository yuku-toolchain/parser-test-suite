const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (const [...x] = iter; ; ) {
    return;
  }
}
fn();