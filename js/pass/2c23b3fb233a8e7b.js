var callCount = 0;
var C = class {
  static async *method({x: y = 33} = {}) {
    callCount = callCount + 1;
  }
};
C.method().next().then(() => {}).then($DONE, $DONE);