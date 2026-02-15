var first = 0;
var second = 0;
var iter = (function* () {
  first += 1;
  second += 1;
})();
async function* gen() {
  for await (var [...x] of [iter]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);