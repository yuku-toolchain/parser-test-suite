const iter = (function* () {
  yield;
  yield;
})();
async function fn() {
  for await (let [] of [iter]) {
    return;
  }
}
fn().then(() => {}).then($DONE, $DONE);