var poisonedValue = Object.defineProperty({}, 'value', {
  get: function () {}
});
var iter = {};
iter[Symbol.iterator] = function () {
  return {
    next() {
      return poisonedValue;
    }
  };
};
async function fn() {
  for await (const [...x] of [iter]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);