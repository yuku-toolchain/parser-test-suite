var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
class C {
  async *method([w = counter(), x = counter(), y = counter(), z = counter()]) {
    callCount = callCount + 1;
  }
}
new C().method([null, 0, false, '']).next().then(() => {}).then($DONE, $DONE);