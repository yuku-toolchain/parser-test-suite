var initCount = 0;
function thrower() {}
async function fn() {
  for await (let {a, b = thrower(), c = ++initCount} of [{}]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);