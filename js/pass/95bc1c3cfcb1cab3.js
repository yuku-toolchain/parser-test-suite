var iter = {};
iter[Symbol.iterator] = function () {};
async function* gen() {
  for await (var [x] of [iter]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);