const iter = (function* () {
  yield;
  yield;
})();
async function fn() {
  for await (const [...x] of [iter]) {
    return;
  }
}
fn().then(() => {}).then($DONE, $DONE);