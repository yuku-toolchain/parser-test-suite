var iter = {};
iter[Symbol.iterator] = function () {};
async function* gen() {
  for await (let [x] of [iter]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);