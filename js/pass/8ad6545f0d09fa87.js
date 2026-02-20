const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (var [] = iter; ; ) {
    return;
  }
}
fn();