var iter = (function* () {})();
async function* gen() {
  for await (const [...x] of [iter]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);