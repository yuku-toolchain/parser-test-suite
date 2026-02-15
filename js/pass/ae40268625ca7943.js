var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
async function* gen() {
  for await (let {poisoned} of [poisonedProperty]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);