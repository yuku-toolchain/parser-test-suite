var callCount = 0;
var C = class {
  async *method() {
    callCount = callCount + 1;
  }
};
var ref = C.prototype.method;
ref(42, undefined).next().then(() => {}).then($DONE, $DONE);