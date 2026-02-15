var following = 0;
var iter = (function* () {
  following += 1;
})();
async function* gen() {
  for await (let [] of [iter]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);