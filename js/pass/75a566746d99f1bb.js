var callCount = 0;
var C = class {
  static async *method(a, b) {
    callCount = callCount + 1;
  }
};
var ref = C.method;
ref(42, 39, 1).next().then(() => {}).then($DONE, $DONE);