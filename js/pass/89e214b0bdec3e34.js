var callCount = 0;
class C {
  async *method([_, x]) {
    callCount = callCount + 1;
  }
}
new C().method([]).next().then(() => {}).then($DONE, $DONE);