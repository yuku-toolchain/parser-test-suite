var x = 0;
var callCount = 0;
async function ref(x, y = x, z = y) {
  callCount = callCount + 1;
}
ref(3).then(() => {}).then($DONE, $DONE);