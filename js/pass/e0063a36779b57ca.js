var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
async function fn() {
  for await (var {poisoned: x = ++initEvalCount} of [poisonedProperty]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);