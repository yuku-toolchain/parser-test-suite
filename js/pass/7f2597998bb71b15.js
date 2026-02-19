const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (let [...x] = iter; ; ) {
    return;
  }
}
fn();