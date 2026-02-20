var callCount = 0;
class C {
  async *method({x: y} = {
    x: 23
  }) {
    callCount = callCount + 1;
  }
}
new C().method().next().then(() => {}).then($DONE, $DONE);