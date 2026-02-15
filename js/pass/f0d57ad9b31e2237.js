var g = {};
g[Symbol.iterator] = function () {
  return {
    next() {}
  };
};
async function fn() {
  for await (let [x] of [g]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);