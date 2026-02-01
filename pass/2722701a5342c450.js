var callCount = 0;
class C {
  async *method({x: [y]}) {
    callCount = callCount + 1;
  }
}
new C().method({
  x: [45]
}).next().then(() => {}).then($DONE, $DONE);