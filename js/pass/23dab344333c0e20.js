var callCount = 0;
var C = class {
  static async *method([arrow = () => {}] = []) {
    callCount = callCount + 1;
  }
};
C.method().next().then(() => {}).then($DONE, $DONE);