var g = {};
g[Symbol.iterator] = function () {
  return {
    next() {}
  };
};
async function* gen() {
  for await (let [x] of [g]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);