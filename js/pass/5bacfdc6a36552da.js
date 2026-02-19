const iter = (function* () {
  yield;
  yield;
})();
async function fn() {
  for await (const [] of [iter]) {
    return;
  }
}
fn().then(() => {}).then($DONE, $DONE);