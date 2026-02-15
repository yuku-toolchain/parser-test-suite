const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (let [...x] of [iter]) {
    return;
  }
}
fn();