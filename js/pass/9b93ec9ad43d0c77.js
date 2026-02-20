var iter = (function* () {})();
async function fn() {
  for await (const [...x] of [iter]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);