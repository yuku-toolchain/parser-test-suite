var following = 0;
var iter = (function* () {
  following += 1;
})();
async function fn() {
  for await (var [] of [iter]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);