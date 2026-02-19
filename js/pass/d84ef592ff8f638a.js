var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
}
var callCount = 0;
class C {
  static async *method([]) {
    callCount = callCount + 1;
  }
}
C.method(g()).next().then(() => {}).then($DONE, $DONE);