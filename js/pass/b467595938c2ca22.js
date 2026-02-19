var callCount = 0;
var C = class {
  static async *method() {
    callCount = callCount + 1;
  }
};
var ref = C.method;
ref(42).next().then(() => {}).then($DONE, $DONE);