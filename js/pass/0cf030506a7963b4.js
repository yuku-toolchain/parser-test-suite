var x = 0;
var callCount = 0;
var C = class {
  static async *method(x, y = x, z = y) {
    callCount = callCount + 1;
  }
};
var ref = C.method;
ref(3).next().then(() => {}).then($DONE, $DONE);