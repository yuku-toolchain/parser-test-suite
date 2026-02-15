var iter = {};
iter[Symbol.iterator] = function () {};
async function fn() {
  for await (let [x] of [iter]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);