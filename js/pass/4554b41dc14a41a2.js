const iter = (function* () {
  yield;
  yield;
})();
async function fn() {
  for await (var [] of [iter]) {
    return;
  }
}
fn().then(() => {}).then($DONE, $DONE);