var callCount = 0;
class C {
  async *method([x = 23] = [undefined]) {
    callCount = callCount + 1;
  }
}
new C().method().next().then(() => {}).then($DONE, $DONE);