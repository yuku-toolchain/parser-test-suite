var values = [1, 2, 3];
var callCount = 0;
class C {
  async *method([...x]) {
    callCount = callCount + 1;
  }
}
new C().method(values).next().then(() => {}).then($DONE, $DONE);