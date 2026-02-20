var callCount = 0;
var C = class {
  async *method([x = 23] = [undefined]) {
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);