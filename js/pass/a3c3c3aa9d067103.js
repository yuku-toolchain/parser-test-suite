const iter = (function* () {
  yield;
  yield;
})();
async function* fn() {
  for await (var [] of [iter]) {
    return;
  }
}
fn().next().then(() => {}).then($DONE, $DONE);