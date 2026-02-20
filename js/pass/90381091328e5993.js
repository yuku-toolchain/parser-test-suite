const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (let [] of [iter]) {
    return;
  }
}
fn();