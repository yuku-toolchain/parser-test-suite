var x = 0;
var callCount = 0;
var C = class {
  async method(x, y = x, z = y) {
    callCount = callCount + 1;
  }
};
var ref = C.prototype.method;
ref(3).then(() => {}).then($DONE, $DONE);