var callCount = 0;
var C = class {
  static async *method({x: [y]} = {
    x: [45]
  }) {
    callCount = callCount + 1;
  }
};
C.method().next().then(() => {}).then($DONE, $DONE);