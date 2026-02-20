var poisonedValue = Object.defineProperty({}, 'value', {
  get: function () {}
});
var g = {};
g[Symbol.iterator] = function () {
  return {
    next() {
      return poisonedValue;
    }
  };
};
async function fn() {
  for await (let [x] of [g]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);