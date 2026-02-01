var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
async function fn() {
  for await (let {poisoned} of [poisonedProperty]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);