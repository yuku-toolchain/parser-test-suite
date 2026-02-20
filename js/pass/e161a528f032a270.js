var initCount = 0;
var callCount = 0;
class C {
  async *method([[] = (function () {
    initCount += 1;
  })()] = [[23]]) {
    callCount = callCount + 1;
  }
}
new C().method().next().then(() => {}).then($DONE, $DONE);