var callCount = 0;
class C {
  async *method({w: [x, y, z] = [4, 5, 6]} = {
    w: [7, undefined]
  }) {
    callCount = callCount + 1;
  }
}
new C().method().next().then(() => {}).then($DONE, $DONE);