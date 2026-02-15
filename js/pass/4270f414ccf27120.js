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
async function* gen() {
  for await (let [...x] of [iter]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);