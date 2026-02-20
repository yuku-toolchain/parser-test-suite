var iter = {};
iter[Symbol.iterator] = function () {};
async function fn() {
  for await (var [x] of [iter]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);