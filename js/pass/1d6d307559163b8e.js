var callCount = 0;
function* g() {
  callCount += 1;
}
var callCount = 0;
class C {
  static async *method([[] = g()]) {
    callCount = callCount + 1;
  }
}
C.method([[]]).next().then(() => {}).then($DONE, $DONE);