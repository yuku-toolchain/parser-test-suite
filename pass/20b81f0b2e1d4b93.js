var count = 0;
var callCount = 0;
async function* f({...x} = {
  get v() {
    count++;
    return 2;
  }
}) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);