var callCount = 0;
class C {
  async *method([...x] = [1, 2]) {
    callCount = callCount + 1;
  }
}
new C().method().next().then(() => {}).then($DONE, $DONE);