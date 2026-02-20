var first = 0;
var second = 0;
var iter = (function* () {
  first += 1;
  second += 1;
})();
async function fn() {
  for await (const [...x] of [iter]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);