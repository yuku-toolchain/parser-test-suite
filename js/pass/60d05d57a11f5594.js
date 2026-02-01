const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (var [...x] = iter; ; ) {
    return;
  }
}
fn();