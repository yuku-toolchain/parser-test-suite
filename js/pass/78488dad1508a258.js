var callCount = 0;
class C {
  async *method([x = 23]) {
    callCount = callCount + 1;
  }
}
new C().method([undefined]).next().then(() => {}).then($DONE, $DONE);