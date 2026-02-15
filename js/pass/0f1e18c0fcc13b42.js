var callCount = 0;
var C = class {
  async *method({x: [y]} = {
    x: [45]
  }) {
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);