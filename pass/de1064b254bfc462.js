var callCount = 0;
var C = class {
  async *method({arrow = () => {}}) {
    callCount = callCount + 1;
  }
};
new C().method({}).next().then(() => {}).then($DONE, $DONE);