var first = 0;
var second = 0;
var iter = (function* () {
  first += 1;
  second += 1;
})();
async function fn() {
  for await (var [...x] of [iter]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);