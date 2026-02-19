const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (var [...x] of [iter]) {
    return;
  }
}
fn();