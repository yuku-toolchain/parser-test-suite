const iter = (function* () {
  yield;
  yield;
})();
async function fn() {
  for await (let [...x] of [iter]) {
    return;
  }
}
fn().then(() => {}).then($DONE, $DONE);