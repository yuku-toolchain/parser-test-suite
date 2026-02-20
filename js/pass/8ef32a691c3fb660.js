var callCount = 0;
class C {
  async *method([x, y, z] = [1, 2, 3]) {
    callCount = callCount + 1;
  }
}
new C().method().next().then(() => {}).then($DONE, $DONE);