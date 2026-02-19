var callCount = 0;
var C = class {
  async *method([...x] = [1, 2]) {
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);