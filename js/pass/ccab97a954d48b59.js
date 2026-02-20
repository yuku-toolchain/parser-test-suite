var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
async function* gen() {
  for await (const {poisoned} of [poisonedProperty]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);