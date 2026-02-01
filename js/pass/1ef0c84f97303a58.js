const iter = (function* () {
  yield;
  yield;
})();
function fn() {
  for (let [] = iter; ; ) {
    return;
  }
}
fn();