var callCount = 0;
var C = class {
  async *method({x: y}) {
    callCount = callCount + 1;
  }
};
new C().method({
  x: 23
}).next().then(() => {}).then($DONE, $DONE);