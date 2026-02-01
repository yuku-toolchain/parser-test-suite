var values = [2, 1, 3];
var callCount = 0;
class C {
  static async *method([[...x] = values]) {
    callCount = callCount + 1;
  }
}
C.method([]).next().then(() => {}).then($DONE, $DONE);