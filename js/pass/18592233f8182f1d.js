var callCount = 0;
var C = class {
  async method(a) {
    callCount = callCount + 1;
  }
};
var ref = C.prototype.method;
ref(42, 39).then(() => {}).then($DONE, $DONE);