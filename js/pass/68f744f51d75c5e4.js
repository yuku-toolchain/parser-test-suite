const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (const [] = iter; ; ) {
    return;
  }
}
fn();