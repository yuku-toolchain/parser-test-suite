var g = {};
g[Symbol.iterator] = function () {
  return {
    next() {}
  };
};
async function* gen() {
  for await (const [x] of [g]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);