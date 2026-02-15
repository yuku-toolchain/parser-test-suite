var callCount = 0;
var C = class {
  async *method(a, b) {
    callCount = callCount + 1;
  }
};
var ref = C.prototype.method;
ref(42, 39, 1).next().then(() => {}).then($DONE, $DONE);