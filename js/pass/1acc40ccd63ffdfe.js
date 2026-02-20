const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (const [] of [iter]) {
    return;
  }
}
fn();