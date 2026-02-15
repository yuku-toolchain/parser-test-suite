var callCount = 0;
var C = class {
  async *method([...[x, y, z]] = [3, 4, 5]) {
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);