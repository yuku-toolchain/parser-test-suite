const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (const [...x] of [iter]) {
    return;
  }
}
fn();