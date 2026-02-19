var values = [2, 1, 3];
var callCount = 0;
class C {
  async *method([[...x] = values]) {
    callCount = callCount + 1;
  }
}
new C().method([]).next().then(() => {}).then($DONE, $DONE);