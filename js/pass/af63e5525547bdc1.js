var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
var f;
f = async function* ([w = counter(), x = counter(), y = counter(), z = counter()]) {
  callCount = callCount + 1;
};
f([null, 0, false, '']).next().then(() => {}).then($DONE, $DONE);