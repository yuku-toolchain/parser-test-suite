var callCount = 0;
var C = class {
  async *method([x = 23]) {
    callCount = callCount + 1;
  }
};
new C().method([undefined]).next().then(() => {}).then($DONE, $DONE);